# Use a lightweight base image (e.g., Ubuntu)
FROM ubuntu:22.04

# Set environment variables for non-interactive installs and production
ENV DEBIAN_FRONTEND=noninteractive \
    NODE_ENV=production \
    BIND="0.0.0.0"

# Update and install required dependencies, including nodejs and redis-tools
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    curl gnupg apt-transport-https lsb-release ca-certificates \
    nodejs redis-tools git netcat && \
    rm -rf /var/lib/apt/lists/*

# Add Node.js repository and install Node.js
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list && \
    apt-get update && apt-get install -y --no-install-recommends nodejs && \
    rm -rf /var/lib/apt/lists/*

# Enable Corepack and set up Yarn
RUN corepack enable && yarn set version classic

# Create a mastodon user and group
RUN useradd -m -s /bin/bash mastodon && \
    echo "mastodon ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Switch to the mastodon user
USER mastodon
WORKDIR /home/mastodon

# Clone the Mastodon repository and check out the latest release
RUN git clone https://github.com/mastodon/mastodon.git live && \
    cd live && \
    git checkout $(git tag -l | grep '^v[0-9.]*$' | sort -V | tail -n 1)

WORKDIR /home/mastodon/live

# Install JavaScript dependencies for streaming
RUN yarn install --immutable

# Expose port for the streaming service
EXPOSE 4000

# Set the entry point to start the streaming service
CMD ["node", "./streaming"]