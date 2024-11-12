# Stage 1: Build Stage
FROM debian:bookworm-slim AS builder

# Set environment variables for non-interactive installs
ENV DEBIAN_FRONTEND=noninteractive \
    RAILS_ENV=production \
    DB_POOL=25 \
    MALLOC_ARENA_MAX=2 \
    LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libjemalloc.so.2 \
    BUNDLE_WITHOUT="development test" \
    SECRET_KEY_BASE=placeholder \
    OTP_SECRET=placeholder \
    VAPID_PRIVATE_KEY=placeholder \
    VAPID_PUBLIC_KEY=placeholder \
    ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY=placeholder \
    ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT=placeholder \
    ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY=placeholder

# Install required dependencies and build tools
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    git \
    curl \
    gnupg \
    ca-certificates \
    libpq-dev \
    libxml2-dev \
    libxslt1-dev \
    g++ \
    pkg-config \
    gcc \
    autoconf \
    bison \
    build-essential \
    libssl-dev \
    libyaml-dev \
    libreadline-dev \
    zlib1g-dev \
    libncurses5-dev \
    libffi-dev \
    libgdbm-dev \
    libjemalloc2 \
    libidn11-dev && \
    curl -fsSLk https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y --no-install-recommends nodejs && \
    corepack enable && corepack prepare yarn@stable --activate && \
    rm -rf /var/lib/apt/lists/*

# Create a mastodon user and set up directories
RUN useradd -m -s /bin/bash mastodon
USER mastodon
WORKDIR /home/mastodon

# Install rbenv and ruby-build, then build Ruby
RUN git clone https://github.com/rbenv/rbenv.git ~/.rbenv && \
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc && \
    echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc && \
    git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build && \
    ~/.rbenv/bin/rbenv install 3.3.5 && \
    ~/.rbenv/bin/rbenv global 3.3.5 && \
    ~/.rbenv/shims/gem install bundler

# Set up rbenv for the current shell
ENV PATH="/home/mastodon/.rbenv/shims:/home/mastodon/.rbenv/bin:$PATH"

# Clone the Mastodon repository
RUN git clone https://github.com/mastodon/mastodon.git live && \
    cd live && \
    git checkout $(git tag -l | grep '^v[0-9.]*$' | sort -V | tail -n 1)

WORKDIR /home/mastodon/live

# Modify Sidekiq configuration to enable health checks
RUN sed -i '/Sidekiq.configure_server do |config|/a \ \ HttpHealthCheck.run_server_async(port: 5555)' config/initializers/sidekiq.rb

# Add required gems to Gemfile
RUN echo "gem 'http_health_check', '0.5.0'" >> Gemfile
RUN echo "gem 'webrick', '1.8.2'" >> Gemfile

# Install dependencies and gems
RUN bundle config unset deployment && \
    bundle install --jobs $(getconf _NPROCESSORS_ONLN) && \
    bundle config deployment 'true' && \
    bundle exec git submodule update --init --recursive && \
    bundle install -j $(getconf _NPROCESSORS_ONLN)

# Stage 2: Runtime Stage
# Use a clean, lightweight image for the runtime environment
FROM alpine:latest
ENV RAILS_ENV=production

# Install essential runtime dependencies
RUN apk update && \
    apk add --no-cache imagemagick curl aws-cli libpq libxml2 libxslt \
    redis iproute2 jq ffmpeg vips bash jemalloc && \
    adduser -D -h /home/mastodon -s /bin/sh mastodon && \
    mkdir -p /home/mastodon/live/

# Copy the Mastodon files from the build stage
# (Assuming you've built and copied only the required runtime files in /home/mastodon/live/public in a multi-stage build)
COPY --from=builder /home/mastodon/live /home/mastodon/live
COPY --from=builder /home/mastodon/.rbenv /home/mastodon/.rbenv

WORKDIR /home/mastodon/live
# Copy entrypoint and configuration scripts
COPY docker-entrypoint.sh /docker-entrypoint.sh
COPY entrypoint.sh /docker-entrypoint.d/
COPY cmd-wrapper.sh /docker-entrypoint.d/
COPY secrets.sh /docker-entrypoint.d/
RUN chmod +x /docker-entrypoint.sh /docker-entrypoint.d/*.sh && \
    rm -rf /home/mastodon/.bundle/cache /home/mastodon/live/node_modules/.cache

# Set ownership and permissions for the mastodon user
RUN find /home/mastodon -print0 | xargs -0 -P 40 chown mastodon:mastodon

# Switch to the mastodon user
USER mastodon
RUN echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
ENV PATH="/home/mastodon/.rbenv/shims:/home/mastodon/.rbenv/bin:$PATH"
WORKDIR /home/mastodon/live
# Expose health check port
EXPOSE 5555

# Entry point script
ENTRYPOINT [ "/docker-entrypoint.sh" ]