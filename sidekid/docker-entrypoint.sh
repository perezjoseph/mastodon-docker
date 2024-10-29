#!/bin/bash
# vim:sw=4:ts=4:et

set -e  # Exit on error

entrypoint_log() {
    if [ -z "${QUIET_LOGS:-}" ]; then
        echo "$@"
    fi
}

# Execute all scripts in /docker-entrypoint.d/ except cmd-wrapper.sh
if [ -d "/docker-entrypoint.d/" ]; then
    if /usr/bin/find "/docker-entrypoint.d/" -mindepth 1 -maxdepth 1 -type f -print -quit 2>/dev/null | read v; then
        entrypoint_log "$0: /docker-entrypoint.d/ is not empty, executing scripts"

        entrypoint_log "$0: Looking for executable scripts in /docker-entrypoint.d/"

        # Execute all scripts except cmd-wrapper.sh
        for script in $(find "/docker-entrypoint.d/" -follow -type f | sort -V); do
            case "$script" in
                */cmd-wrapper.sh)  # Skip cmd-wrapper.sh for now
                    entrypoint_log "$0: Skipping $script (will run last)"
                    continue
                    ;;
                *.sh)
                    if [ -x "$script" ]; then
                        entrypoint_log "$0: Executing $script"
                        source "$script"  # Source script to maintain environment
                    else
                        entrypoint_log "$0: Skipping $script, not executable"
                    fi
                    ;;
                *) 
                    entrypoint_log "$0: Skipping $script, unsupported extension"
                    ;;
            esac
        done

        entrypoint_log "$0: All non-wrapper scripts executed"
    else
        entrypoint_log "$0: No files found in /docker-entrypoint.d/, skipping"
    fi
else
    entrypoint_log "$0: /docker-entrypoint.d/ directory not found, skipping"
fi

# Execute cmd-wrapper.sh as the final step
if [ -x "/docker-entrypoint.d/cmd-wrapper.sh" ]; then
    entrypoint_log "$0: Executing cmd-wrapper.sh..."
    exec /docker-entrypoint.d/cmd-wrapper.sh "$@"  # Use exec to replace the shell
else
    entrypoint_log "$0: cmd-wrapper.sh not found or not executable, skipping"
    exec "$@"  # Fallback to whatever command was passed
fi