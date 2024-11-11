# Use a lightweight base image (e.g., Ubuntu)
FROM ubuntu:22.04

# Set environment variables for non-interactive installs and production
ENV DEBIAN_FRONTEND=noninteractive \
    RAILS_ENV=production \
    DB_POOL=25 \
    MALLOC_ARENA_MAX=2 \
    LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libjemalloc.so.2 \
    BUNDLE_WITHOUT="development test"

# Update and install required dependencies, including libidn11-dev for idn-ruby gem and jemalloc
RUN apt-get update && \
    apt-get install -y --no-install-recommends git imagemagick \
    curl awscli gnupg apt-transport-https lsb-release ca-certificates \
    libpq-dev libxml2-dev libxslt1-dev file git-core \
    g++ libprotobuf-dev protobuf-compiler pkg-config gcc autoconf \
    bison build-essential libssl-dev libyaml-dev libreadline6-dev \
    zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev \
    libidn11-dev redis-tools libjemalloc2 iproute2 jq ffmpeg && \
    rm -rf /var/lib/apt/lists/*

RUN useradd -m -s /bin/bash mastodon
# Switch to the mastodon user
USER mastodon
WORKDIR /home/mastodon

RUN git clone https://github.com/rbenv/rbenv.git ~/.rbenv && \
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc && \
    echo 'eval "$(rbenv init -)"' >> ~/.bashrc && \
    git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build && \
    ~/.rbenv/bin/rbenv install 3.3.5 && \
    ~/.rbenv/bin/rbenv global 3.3.5 && \
    ~/.rbenv/shims/gem install bundler 

# Set up rbenv for the current shell
ENV PATH="/home/mastodon/.rbenv/shims:/home/mastodon/.rbenv/bin:$PATH"

# Clone the Mastodon repository and check out the latest release
RUN git clone https://github.com/mastodon/mastodon.git live && \
    cd live && \
    git checkout $(git tag -l | grep '^v[0-9.]*$' | sort -V | tail -n 1)

WORKDIR /home/mastodon/live
RUN sed -i '/Sidekiq.configure_server do |config|/a \ \ HttpHealthCheck.run_server_async(port: 5555)' config/initializers/sidekiq.rb

RUN echo "gem 'http_health_check', '0.5.0'" >> Gemfile
RUN echo "gem 'webrick', '1.8.2'" >> Gemfile

# Disable deployment mode, fetch git-sourced gems, and install all dependencies
RUN bundle config unset deployment && \
    bundle install --jobs $(getconf _NPROCESSORS_ONLN) && \
    bundle config deployment 'true'

# Ensure git-sourced gems are properly fetched
RUN bundle exec git submodule update --init --recursive

# Re-enable deployment mode and install remaining dependencies
RUN bundle install -j$(getconf _NPROCESSORS_ONLN)

USER root
RUN mkdir /docker-entrypoint.d
COPY entrypoint.sh /docker-entrypoint.d/
COPY cmd-wrapper.sh /docker-entrypoint.d/
COPY secrets.sh /docker-entrypoint.d/
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.d/cmd-wrapper.sh /docker-entrypoint.d/secrets.sh /docker-entrypoint.d/entrypoint.sh /docker-entrypoint.sh && \
    rm -rf /home/mastodon/.bundle/cache /home/mastodon/live/node_modules/.cache 
WORKDIR /home/mastodon/live

ENTRYPOINT [ "/docker-entrypoint.sh" ]
USER mastodon
EXPOSE 5555
