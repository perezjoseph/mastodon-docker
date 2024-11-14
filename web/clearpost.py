from mastodon import Mastodon

# Replace with your Mastodon instance URL and access token
INSTANCE_URL = 'https://your-instance-url'  # Replace with your Mastodon instance URL
ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN'          # Replace with your access token

# Initialize Mastodon client
mastodon = Mastodon(
    access_token='9sa3dxQldRpAqfQox9koBPAifsBuRGYcYft7h3iqbh8',
    api_base_url='https://jpilier.people.aws.dev'
)

def delete_all_posts():
    try:
        # Get the authenticated user's account ID
        my_account = mastodon.me()
        user_id = my_account['id']
        
        # Fetch all statuses (posts) by the user
        posts = mastodon.account_statuses(user_id)
        
        # Iterate through each post and delete it
        for post in posts:
            post_id = post['id']
            mastodon.status_delete(post_id)
            print(f"Deleted post ID: {post_id}")
        
        print("All posts deleted successfully.")
        
    except Exception as e:
        print(f"An error occurred: {e}")

# Run the delete function
while True:
    delete_all_posts()