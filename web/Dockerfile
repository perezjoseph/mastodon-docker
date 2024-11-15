# Stage 1: Builder
FROM debian:bookworm-slim AS builder

# Set environment variables for non-interactive installs and production
ENV DEBIAN_FRONTEND=noninteractive \
    RAILS_ENV=production \
    NODE_ENV=production \
    BUNDLE_WITHOUT="development test" \
    SECRET_KEY_BASE=placeholder \
    OTP_SECRET=placeholder \
    VAPID_PRIVATE_KEY=placeholder \
    VAPID_PUBLIC_KEY=placeholder \
    ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY=placeholder \
    ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT=placeholder \
    ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY=placeholder

# Update and install build dependencies
RUN apt update && \
    apt install -y --no-install-recommends \
    build-essential \
    curl \
    ffmpeg \
    awscli \
    gnupg \
    apt-transport-https \
    lsb-release \
    ca-certificates \
    imagemagick \
    libpq-dev \
    libxml2-dev \
    libxslt1-dev \
    file \
    git \
    autoconf \
    bison \
    libssl-dev \
    libyaml-dev \
    libreadline-dev \
    zlib1g-dev \
    libncurses5-dev \
    libffi-dev \
    libgdbm-dev \
    libidn11-dev \
    pkg-config \
    nodejs \
    redis-tools && \
    rm -rf /var/lib/apt/lists/*

# Add Node.js repository and install Node.js
RUN curl -fsSLk https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh

    # Install Node.js
RUN chmod +x nodesource_setup.sh && bash nodesource_setup.sh

RUN apt-get install -y nodejs --no-install-recommends
    
    # Clean up APT when done
RUN rm -rf /var/lib/apt/lists/*

# Clean up APT when done
RUN rm -rf /var/lib/apt/lists/*

# Enable Corepack and set up Yarn
RUN corepack enable && corepack prepare yarn@stable --activate

# Create a mastodon user
RUN useradd -m -s /bin/bash mastodon

# Switch to the mastodon user
USER mastodon
WORKDIR /home/mastodon

# Install rbenv and Ruby 3.2.3
RUN git clone https://github.com/rbenv/rbenv.git ~/.rbenv && \
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc && \
    echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc && \
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
RUN sed -i "/gem 'rack-attack'/d" Gemfile && sed -i "/config.middleware.use Rack::Attack/d" config/application.rb && rm config/initializers/rack_attack.rb && bundle config set frozen 'false' && sed -i "/with_rate_limit:/d" app/controllers/api/v1/statuses_controller.rb
# Install Ruby and JavaScript dependencies in production mode
RUN bundle config set deployment 'true' && \
    bundle config set without 'development test' && \
    bundle install -j$(nproc) && \
    yarn install --immutable

# Precompile assets
RUN RAILS_ENV=production bundle exec rake assets:precompile

# Stage 2: Runtime
FROM debian:bookworm-slim

# Set environment variables for production
ENV RAILS_ENV=production \
    NODE_ENV=production \
    BUNDLE_WITHOUT="development test" \
    BIND="127.0.0.1" \
    PORT=3000 \
    SECRET_KEY_BASE=placeholder \
    OTP_SECRET=placeholder \
    VAPID_PRIVATE_KEY=placeholder \
    VAPID_PUBLIC_KEY=placeholder \
    ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY=placeholder \
    ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT=placeholder \
    ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY=placeholder

# Install runtime dependencies
RUN apt update && \
    apt install -y --no-install-recommends \
    curl \
    ffmpeg \
    awscli \
    imagemagick \
    file \
    nodejs \
    redis-tools \
    jq \
    libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev libpq-dev libxml2-dev libxslt1-dev libicu-dev libidn11-dev libicu-dev libjemalloc-dev libvips-tools libprotobuf-dev
RUN  apt install libidn12 && \
    rm -rf /var/lib/apt/lists/*

RUN curl -fsSLk https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh

RUN chmod +x nodesource_setup.sh && bash nodesource_setup.sh

RUN apt-get install -y nodejs --no-install-recommends

RUN rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare yarn@stable --activate

RUN useradd -m -s /bin/bash mastodon

USER mastodon

WORKDIR /home/mastodon
COPY --from=builder /home/mastodon/.rbenv /home/mastodon/.rbenv
ENV PATH="/home/mastodon/.rbenv/shims:/home/mastodon/.rbenv/bin:$PATH"
COPY --from=builder /home/mastodon/live /home/mastodon/live

USER root
RUN find /home/mastodon -print0 | xargs -0 -P 40 chown mastodon:mastodon
RUN mkdir /docker-entrypoint.d
COPY entrypoint.sh /docker-entrypoint.d/
COPY cmd-wrapper.sh /docker-entrypoint.d/
COPY secrets.sh /docker-entrypoint.d/
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.d/cmd-wrapper.sh /docker-entrypoint.d/secrets.sh /docker-entrypoint.d/entrypoint.sh /docker-entrypoint.sh && \
    rm -rf /home/mastodon/.bundle/cache /home/mastodon/live/node_modules/.cache && \
    yarn cache clean --all && apt-get clean

RUN rm -f /lib/x86_64-linux-gnu/libLLVM-15.so.1 \
/lib/x86_64-linux-gnu/libz3.so.4 \
/lib/x86_64-linux-gnu/libcodec2.so.1.0 \
/lib/x86_64-linux-gnu/libx265.so.199 \
/lib/x86_64-linux-gnu/libmfxhw64.so.1.35 \
/lib/x86_64-linux-gnu/libplacebo.so.208 \
/lib/x86_64-linux-gnu/dri/zink_dri.so \
/home/mastodon/live/.git && \
yarn remove @babel/plugin-transform-nullish-coalescing-operator \
            @babel/plugin-transform-react-inline-elements \
            @babel/plugin-transform-runtime \
            @babel/runtime \
            @svgr/webpack \
            babel-loader \
            babel-plugin-lodash \
            babel-plugin-transform-react-remove-prop-types \
            core-js \
            css-loader \
            file-loader \
            imports-loader \
            mark-loader \
            postcss-loader \
            punycode \
            sass-loader \
            webpack-cli && \
# Remove unused devDependencies
yarn remove @types/babel__core \
            @types/intl \
            @types/jest \
            @types/js-yaml \
            @types/object-assign \
            @types/punycode \
            @types/react-immutable-proptypes \
            @types/react-swipeable-views \
            @types/react-test-renderer \
            @types/webpack \
            @types/webpack-env \
            babel-jest \
            jest-environment-jsdom \
            lint-staged \
            stylelint-config-prettier-scss \
            stylelint-config-standard-scss \
            webpack-dev-server
WORKDIR /home/mastodon/live


USER mastodon
EXPOSE 3000
ENTRYPOINT [ "/docker-entrypoint.sh" ]
