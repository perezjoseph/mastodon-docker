import os
import random
import time
from PIL import Image  # Pillow for image validation
from concurrent.futures import ThreadPoolExecutor
from mastodon import Mastodon
from google_images_search import GoogleImagesSearch

# Mastodon authentication
mastodon = Mastodon(
    access_token='DfxkmHNx9m77HgW97-zHRNc-TqZV2u-ymprCCdnnZBw',
    api_base_url='https://jpilier.people.aws.dev'
)

# Google API setup
google_api_key = 'AIzaSyDLQF7SbgiV-IukMzhAlm-Rn14cG6BeoD0'
google_cse_id = '85095de07bf394f77'
gis = GoogleImagesSearch(google_api_key, google_cse_id)

# Directory to store images with full path
image_dir = '/home/ubuntu/downloaded_images'
os.makedirs(image_dir, exist_ok=True)

# Validate image
def validate_image(path):
    try:
        with Image.open(path) as img:
            img.verify()
        print(f"Validated image: {path}")
        return True
    except Exception as e:
        print(f"Invalid image file {path}: {e}")
        os.remove(path)
        return False

# Search and download images
def download_image(search_term):
    try:
        print(f"Searching for images with term: {search_term}")
        gis.search({'q': search_term, 'num': 5, 'fileType': 'jpg|png|gif'})

        if not gis.results():
            print(f"No images found for {search_term}")
            return []

        image_files = []
        for index, image in enumerate(gis.results()):
            filename = f"{search_term}_{int(time.time())}_{index}.jpg"
            path = os.path.join(image_dir, filename)
            
            # Use the image url to download if direct download fails
            image.copy_to(image_dir, custom_image_name=filename)  # Downloads to specified directory
            print(f"Downloaded image to {path}")
            
            if validate_image(path):  # Check if image is valid
                image_files.append(path)
            else:
                print(f"Removed corrupted image: {path}")
        return image_files
    except Exception as e:
        print(f"Error downloading images for {search_term}: {e}")
        return []

# Function to post an image to Mastodon
def post_random_image():
    try:
        images = os.listdir(image_dir)
        if not images:
            print("No images found in directory to post.")
            return

        image_path = os.path.join(image_dir, random.choice(images))
        print(f"Attempting to post image: {image_path}")
        
        media = mastodon.media_post(media_file=image_path, description='A randomly selected image from Google Images')
        
        if media:
            print(f"Posted image: {image_path}")
        else:
            print("Failed to post image to Mastodon.")
    except Exception as e:
        print(f"Error posting image: {e}")

# Multithreaded download
def download_images_multithreaded(search_terms):
    with ThreadPoolExecutor() as executor:
        executor.map(download_image, search_terms)

# Main bot functionality
if __name__ == '__main__':
    search_terms = ["nature", "technology", "animals", "art", "travel"]
    download_images_multithreaded(search_terms)
    post_random_image()