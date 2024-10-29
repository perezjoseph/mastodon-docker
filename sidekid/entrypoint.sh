#!/bin/bash

set -e  # Exit immediately on any command failure

# Logging functions
log_info() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $@"
}

log_error() {
    echo "ERROR: $@" >&2
}

# Validate required environment variables
if [ -z "${SECRET_ID}" ]; then
    log_error "SECRET_ID environment variable is not set. Exiting."
    exit 1
fi

if [ -z "${AWS_REGION}" ]; then
    log_error "AWS_REGION environment variable is not set. Exiting."
    exit 1
fi

log_info "Using SECRET_ID: $SECRET_ID"
log_info "Using AWS_REGION: $AWS_REGION"

# Function to retrieve secrets from AWS Secrets Manager
get_secret_value() {
    local field=$1
    local secret_value
    secret_value=$(aws secretsmanager get-secret-value \
        --secret-id "$SECRET_ID" \
        --region "$AWS_REGION" \
        --query 'SecretString' --output text 2>&1)

    if [ $? -ne 0 ]; then
        log_error "Failed to fetch secret: $secret_value"
        exit 1
    fi

    # Extract the field value using jq
    echo "$secret_value" | jq -r --arg field "$field" '.[$field] // empty'
}

# Retrieve the DB credentials
log_info "Retrieving DB credentials from AWS Secrets Manager..."

DB_PASS=$(get_secret_value "password")
DB_USER=$(get_secret_value "username")


# Validate the retrieved values
if [ -z "$DB_PASS" ] || [ -z "$DB_USER" ]; then
    log_error "Failed to retrieve all required secrets (DB_PASS, DB_USER)."
    exit 1
fi

log_info "Successfully retrieved DB credentials."

# Optionally export the DB credentials as environment variables
if [ "${EXPORT_SECRET_AS_ENV:-false}" = "true" ]; then
    export DB_PASS
    export DB_USER
    export REPLICA_DB_USER="$DB_USER"
    export REPLICA_DB_PASS="$DB_PASS"
    log_info "DB credentials have been exported as environment variables."
else
    log_info "Skipping export of DB credentials to environment."
fi

# Execute the main process passed as arguments to the container
log_info "Executing main process: $@"
exec "$@"