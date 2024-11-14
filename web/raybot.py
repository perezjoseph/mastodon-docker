import os
import time
import requests
import ray
from PIL import Image
from io import BytesIO
from mastodon import Mastodon
from google_images_search import GoogleImagesSearch
from requests.exceptions import RequestException

# Initialize Ray
ray.shutdown()
ray.init(
    address='auto',
    runtime_env={"pip": ["pillow"]}
)

# Mastodon authentication
mastodon = Mastodon(
    access_token='9sa3dxQldRpAqfQox9koBPAifsBuRGYcYft7h3iqbh8',
    api_base_url='https://jpilier.people.aws.dev'
)

# Google API setup
google_api_key = 'AIzaSyAY8J106jHpfiOwGC_F1tqYYbpJP4a_Bng'
google_cse_id = '85095de07bf394f77'
gis = GoogleImagesSearch(google_api_key, google_cse_id)

# Function to download, process, and post a single image, now a Ray task
@ray.remote(num_cpus=0.25)
def download_process_post_image(image_url, search_term):
    try:
        # Skip SVG images
        if image_url.lower().endswith('.svg'):
            return

        response = requests.get(image_url, timeout=5)
        response.raise_for_status()
        if 'image/svg+xml' in response.headers.get('Content-Type', ''):
            return

        img = Image.open(BytesIO(response.content))
        img = img.convert("RGB")
        img.thumbnail((800, 800))  # Resize to max 800x800 pixels

        # Convert to JPEG
        img_byte_array = BytesIO()
        img.save(img_byte_array, format="JPEG", quality=85)
        img_byte_array.seek(0)

        # Post image to Mastodon
        delay, max_delay = 2, 300
        while True:
            try:
                media = mastodon.media_post(
                    media_file=img_byte_array,
                    mime_type="image/jpeg",
                    description=f'A randomly selected image for {search_term}'
                )
                media_id = media['id']
                status = mastodon.status_post(
                    status=f'Here is a new image for {search_term}!',
                    media_ids=[media_id],
                    visibility='private'
                )
                print(f"Posted status: {status['id']} for {search_term}")
                break
            except RequestException as e:
                print(f"Media post failed for {search_term}: {e}. Retrying in {delay}s.")
                time.sleep(delay)
                delay = min(delay * 2, max_delay)
    except Exception as e:
        print(f"Error processing image from {image_url} for {search_term}: {e}")

# Ray task for concurrent downloading, processing, and posting images for each search term
@ray.remote(num_cpus=0.01)  # Adjust CPU usage as needed
def process_images_for_term(search_term):
    try:
        # Search for images using Google Images Search API
        gis.search({'q': search_term, 'num': 1, 'fileType': 'jpg|png|gif'})  # Fetch only one image
        image_urls = [image.url for image in gis.results()]

        if image_urls:
            # Select the first image URL and post it 1000 times using Ray tasks
            image_url = image_urls[0]
            tasks = [download_process_post_image.remote(image_url, search_term) for _ in range(1000)]
            ray.get(tasks)  # Wait for all image posts to complete
    except Exception as e:
        print(f"Error in processing images for {search_term}: {e}")

# Main bot functionality
if __name__ == '__main__':
    dictionary_words = ["data", "technology", "cloud", "serverless", "architecture", "infrastructure", "scalability", "networking"]

    while True:
        futures = [process_images_for_term.remote(term) for term in dictionary_words]
        ray.get(futures)  # Wait for all tasks to complete before looping again