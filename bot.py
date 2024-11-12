import os
import time
import random
import multiprocessing
import requests
from io import BytesIO
from concurrent.futures import ThreadPoolExecutor, as_completed
from PIL import Image  # Pillow for image handling and conversion
from mastodon import Mastodon, MastodonAPIError, MastodonNetworkError
from google_images_search import GoogleImagesSearch
from requests.exceptions import RequestException

# Constants and configurations
IMAGE_DIR = '/home/ubuntu/downloaded_images'
MAX_WORKERS = multiprocessing.cpu_count()
MAX_IMAGE_SIZE_MB = 8
MAX_IMAGE_DIMENSIONS = (1280, 720)
SLEEP_INTERVAL = 3600  # Sleep for one hour
SEARCH_TERMS = [
    "data", "technology", "cloud", "serverless", "architecture",
    "infrastructure", "scalability", "networking"
]

# Initialize directories
os.makedirs(IMAGE_DIR, exist_ok=True)

# Mastodon authentication
mastodon = Mastodon(
    access_token='9sa3dxQldRpAqfQox9koBPAifsBuRGYcYft7h3iqbh8',
    api_base_url='https://jpilier.people.aws.dev'
)

# Google API setup
google_api_key = 'AIzaSyDLQF7SbgiV-IukMzhAlm-Rn14cG6BeoD0'
google_cse_id = '85095de07bf394f77'
gis = GoogleImagesSearch(google_api_key, google_cse_id)

def is_image_size_valid(image_path, max_size_mb=MAX_IMAGE_SIZE_MB):
    return os.path.getsize(image_path) <= max_size_mb * 1024 * 1024

def download_and_convert_image(image_url, search_term, index):
    try:
        response = requests.get(image_url)
        response.raise_for_status()
        img = Image.open(BytesIO(response.content))

        # Resize image if necessary
        img.thumbnail(MAX_IMAGE_DIMENSIONS, Image.LANCZOS)

        # Convert to JPEG
        filename = f"{search_term}_{int(time.time())}_{index}.jpg"
        path = os.path.join(IMAGE_DIR, filename)
        img.convert("RGB").save(path, "JPEG", quality=85)

        print(f"Downloaded and converted image to {path}")
        return path
    except Exception as e:
        print(f"Failed to download and convert image from {image_url}: {e}")
        return None

def search_and_download_images(search_term):
    try:
        print(f"Searching for images with term: {search_term}")
        search_params = {
            'q': search_term,
            'num': 1,
            'safe': 'off'  # Adjust as per Google's policies
        }
        gis.search(search_params=search_params)

        if not gis.results():
            print(f"No images found for {search_term}")
            return []

        image_files = []
        for index, image in enumerate(gis.results()):
            path = download_and_convert_image(image.url, search_term, index)
            if path:
                image_files.append(path)
        return image_files
    except Exception as e:
        print(f"Error downloading images for {search_term}: {e}")
        return []

def upload_media_with_retry(image_path, max_retries=5, initial_delay=2, max_delay=300):
    delay = initial_delay
    for attempt in range(max_retries):
        try:
            media = mastodon.media_post(
                media_file=image_path,
                description='A randomly selected image from Google Images'
            )
            if media:
                return media
            else:
                print(f"Media post returned None, retrying in {delay} seconds...")
        except (MastodonAPIError, MastodonNetworkError, RequestException) as e:
            print(f"Media post attempt {attempt + 1} failed: {e}")
        time.sleep(delay)
        delay = min(delay * 2, max_delay)
    return None

def post_status_with_media(media):
    try:
        status = mastodon.status_post(
            status='Here is a new image!',
            media_ids=[media['id']]
        )
        return status
    except (MastodonAPIError, MastodonNetworkError, RequestException) as e:
        print(f"Failed to post status: {e}")
        return None

def print_status_response(status):
    print("Status post response:")
    print(f"  Status ID: {status['id']}")
    print(f"  Created At: {status['created_at']}")
    print(f"  URL: {status['url']}")
    print(f"  Content: {status['content']}")
    print(f"  Replies Count: {status['replies_count']}")
    print(f"  Reblogs Count: {status['reblogs_count']}")
    print(f"  Favourites Count: {status['favourites_count']}")
    if 'media_attachments' in status:
        print("  Media Attachments:")
        for media_item in status['media_attachments']:
            print(f"    - Media ID: {media_item['id']}")
            print(f"      URL: {media_item['url']}")
            print(f"      Preview URL: {media_item['preview_url']}")
            print(f"      Description: {media_item.get('description', 'No description')}")

def delete_image_file(image_path):
    try:
        os.remove(image_path)
        print(f"Deleted image file {image_path} after successful posting.")
    except Exception as e:
        print(f"Error deleting image file {image_path}: {e}")

def post_image(image_path):
    print(f"Attempting to post image: {image_path}")

    if not is_image_size_valid(image_path):
        print(f"Image {image_path} exceeds Mastodon's file size limit.")
        return

    media = upload_media_with_retry(image_path)
    if not media:
        print(f"Failed to upload media after retries.")
        return

    status = post_status_with_media(media)
    if status:
        print_status_response(status)
        delete_image_file(image_path)
    else:
        print(f"Failed to post status with media.")

def download_images_multithreaded(search_terms):
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = [executor.submit(search_and_download_images, term) for term in search_terms]
        for future in as_completed(futures):
            future.result()

def post_all_images_concurrently():
    images = os.listdir(IMAGE_DIR)
    if not images:
        print("No images found in directory to post.")
        return

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = [executor.submit(post_image, os.path.join(IMAGE_DIR, img)) for img in images]
        for future in as_completed(futures):
            try:
                future.result()
            except Exception as e:
                print(f"Error posting an image: {e}")

def main():
    while True:
        random_terms = random.sample(SEARCH_TERMS, k=3)  # Choose 3 random terms
        download_images_multithreaded(random_terms)
        post_all_images_concurrently()
        # Sleep for some time before next iteration
        print(f"Sleeping for {SLEEP_INTERVAL} seconds before next iteration.")
        time.sleep(SLEEP_INTERVAL)

if __name__ == '__main__':
    main()