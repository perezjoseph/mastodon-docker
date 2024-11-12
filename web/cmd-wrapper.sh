#!/bin/bash




#!/bin/sh

# Start logging function
entrypoint_log() {
    if [ -z "${QUIET_LOGS:-}" ]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') - $@"
    fi
}

# Start NGINX
entrypoint_log "Starting PUMA..."
exec bundle exec puma -C config/puma.rb &
puma_pid=$!

# Start puma
entrypoint_log "Starting puma..."
exec bundle exec sidekiq -c 25 &
puma_pid=$!

# Monitor both processes
entrypoint_log "Monitoring PUMA (PID: $puma_pid) and SIDEQUIQ (PID: $puma_pid)"
while true; do
    # Check if NGINX is running
    if ! kill -0 "$puma_pid" 2>/dev/null; then
        entrypoint_log "puma exited unexpectedly. Terminating container."
        exit 1
    fi

    # Check if puma is running
    if ! kill -0 "$puma_pid" 2>/dev/null; then
        entrypoint_log "puma exited unexpectedly. Terminating container."
        exit 1
    fi

    # Sleep before checking again
    sleep 5
done