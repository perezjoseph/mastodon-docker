#!/bin/sh

# Start logging function
entrypoint_log() {
    if [ -z "${QUIET_LOGS:-}" ]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') - $@"
    fi
}

# Start NGINX
entrypoint_log "Starting NGINX..."
nginx -g 'daemon off;' &
nginx_pid=$!

# Start HAProxy
entrypoint_log "Starting HAProxy..."
haproxy -f /etc/haproxy/haproxy.cfg &
haproxy_pid=$!

# Monitor both processes
entrypoint_log "Monitoring NGINX (PID: $nginx_pid) and HAProxy (PID: $haproxy_pid)"
while true; do
    # Check if NGINX is running
    if ! kill -0 "$nginx_pid" 2>/dev/null; then
        entrypoint_log "NGINX exited unexpectedly. Terminating container."
        exit 1
    fi

    # Check if HAProxy is running
    if ! kill -0 "$haproxy_pid" 2>/dev/null; then
        entrypoint_log "HAProxy exited unexpectedly. Terminating container."
        exit 1
    fi

    # Sleep before checking again
    sleep 5
done