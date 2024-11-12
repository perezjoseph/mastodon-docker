import os
import random
import time
import requests
import ray
from PIL import Image
from io import BytesIO
from mastodon import Mastodon
from google_images_search import GoogleImagesSearch
from concurrent.futures import ThreadPoolExecutor, as_completed
from requests.exceptions import RequestException

# Initialize Ray
ray.init(address='auto')

# Mastodon authentication
mastodon = Mastodon(
    access_token='OdSykCOA3kVNlN-TKO2ffUkwk8Fx8i1Oy0yt1bMT2b4',
    api_base_url='https://jpilier.people.aws.dev'
)

# Google API setup
google_api_key = 'AIzaSyDLQF7SbgiV-IukMzhAlm-Rn14cG6BeoD0'
google_cse_id = '85095de07bf394f77'
gis = GoogleImagesSearch(google_api_key, google_cse_id)

# Download and convert image to BytesIO
def download_and_convert_image(image_url, search_term, index):
    try:
        # Check the file extension
        if image_url.lower().endswith('.svg'):
            print(f"Skipping SVG file: {image_url}")
            return None

        response = requests.get(image_url)
        response.raise_for_status()

        # Check the content type for SVG
        if 'image/svg+xml' in response.headers.get('Content-Type', ''):
            print(f"Skipping SVG file based on Content-Type: {image_url}")
            return None

        img = Image.open(BytesIO(response.content))
        
        # Convert to JPEG and store in BytesIO
        img_byte_array = BytesIO()
        img.convert("RGB").save(img_byte_array, format="JPEG")
        img_byte_array.seek(0)
        
        print(f"Downloaded and converted image for term '{search_term}' (index {index})")
        return img_byte_array
    except Exception as e:
        print(f"Failed to download and convert image from {image_url}: {e}")
        return None
# Search and download images
@ray.remote
def download_images(search_term):
    try:
        print(f"Searching for images with term: {search_term}")
        gis.search({'q': search_term, 'num': 3, 'fileType': 'jpg|png|gif'})

        if not gis.results():
            print(f"No images found for {search_term}")
            return []

        image_files = []
        with ThreadPoolExecutor() as executor:
            futures = [
                executor.submit(download_and_convert_image, image.url, search_term, index)
                for index, image in enumerate(gis.results())
            ]
            for future in as_completed(futures):
                img_byte_array = future.result()
                if img_byte_array:
                    image_files.append(img_byte_array)

        return image_files
    except Exception as e:
        print(f"Error downloading images for {search_term}: {e}")
        return []

# Post image to Mastodon with retry logic
@ray.remote
def post_image(img_byte_array):
    print("Attempting to post image")
    try:
        delay = 2
        max_delay = 300

        while True:
            try:
                # Prepare the in-memory image for Mastodon
                media = mastodon.media_post(
                    media_file=img_byte_array,
                    mime_type="image/jpeg",
                    description='A randomly selected image from Google Images'
                )
                if media:
                    break
            except RequestException as e:
                print(f"Media post attempt failed: {e}")
                print(f"Retrying in {delay} seconds...")
                time.sleep(delay)
                delay = min(delay * 2, max_delay)

        media_id = media['id']
        status = mastodon.status_post(
            status='Here is a new image!',
            media_ids=[media_id]
        )

        print("Status post response:")
        print(f"  Status ID: {status['id']}")
        print(f"  Created At: {status['created_at']}")
        print(f"  URL: {status['url']}")
        print(f"  Content: {status['content']}")

    except Exception as e:
        print(f"Unexpected error posting image: {e}")

# Post all images concurrently
def post_all_images_concurrently(image_files):
    if not image_files:
        print("No images found to post.")
        return

    with ThreadPoolExecutor() as executor:
        futures = [executor.submit(post_image.remote, img_byte_array) for img_byte_array in image_files]
        for future in as_completed(futures):
            try:
                future.result()
            except Exception as e:
                print(f"Error posting an image: {e}")

# Main bot functionality
if __name__ == '__main__':
    dictionary_words = ["data", "technology", "cloud", "serverless", "architecture", "infrastructure", "scalability", "networking"]
    while True:
        random_term = random.choice(dictionary_words)
        image_files = ray.get(download_images.remote(random_term))
        post_all_images_concurrently(image_files)