#!/bin/bash

# Function to log messages with timestamps

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1"
}

# Function to handle errors and exit
error_exit() {
    log "ERROR: $1"
    exit 1
}
if [ -z "${PARAMETER_STORE}" ]; then
    error_exit "PARAMETER_STORE environment variable is not set. Exiting."
    exit 1
fi

if [ -z "${AWS_REGION}" ]; then
    error_exit "AWS_REGION environment variable is not set. Exiting."
    exit 1
fi
# Function to check if AWS CLI and jq are installed
check_dependencies() {
    log "Checking dependencies..."
    command -v aws >/dev/null 2>&1 || error_exit "AWS CLI is not installed. Please install it."
    command -v jq >/dev/null 2>&1 || error_exit "jq is not installed. Please install it."
}

# Function to retrieve JSON from SSM Parameter Store
fetch_json_from_ssm() {
    log "Fetching JSON data from SSM Parameter Store..."
    JSON_DATA=$(aws ssm get-parameter --region "$AWS_REGION" --name "$PARAMETER_STORE" --with-decryption --query "Parameter.Value" --output text)

    if [[ -z "$JSON_DATA" ]]; then
        error_exit "Failed to retrieve JSON from SSM Parameter Store."
    fi
}

# Function to validate that an environment variable is set
validate_variable() {
    local var_name="$1"
    local var_value="$2"

    if [[ -z "$var_value" ]]; then
        error_exit "Environment variable $var_name is missing or empty."
    fi
}

# Function to export environment variables from JSON and validate them
set_environment_variables() {
    log "Setting environment variables from JSON..."

    SECRET_KEY_BASE=$(echo "$JSON_DATA" | jq -r '.SECRET_KEY_BASE') || error_exit "Failed to parse SECRET_KEY_BASE"
    OTP_SECRET=$(echo "$JSON_DATA" | jq -r '.OTP_SECRET') || error_exit "Failed to parse OTP_SECRET"
    VAPID_PRIVATE_KEY=$(echo "$JSON_DATA" | jq -r '.VAPID_PRIVATE_KEY') || error_exit "Failed to parse VAPID_PRIVATE_KEY"
    VAPID_PUBLIC_KEY=$(echo "$JSON_DATA" | jq -r '.VAPID_PUBLIC_KEY') || error_exit "Failed to parse VAPID_PUBLIC_KEY"
    ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY=$(echo "$JSON_DATA" | jq -r '.ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY') || error_exit "Failed to parse ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY"
    ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT=$(echo "$JSON_DATA" | jq -r '.ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT') || error_exit "Failed to parse ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT"
    ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY=$(echo "$JSON_DATA" | jq -r '.ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY') || error_exit "Failed to parse ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY"
    SMTP_PASSWORD=$(echo "$JSON_DATA" | jq -r '.SMTP_PASSWORD') || error_exit "Failed to parse SMTP_PASSWORD"
    # Validate that all variables are set
    validate_variable "SECRET_KEY_BASE" "$SECRET_KEY_BASE"
    validate_variable "OTP_SECRET" "$OTP_SECRET"
    validate_variable "VAPID_PRIVATE_KEY" "$VAPID_PRIVATE_KEY"
    validate_variable "VAPID_PUBLIC_KEY" "$VAPID_PUBLIC_KEY"
    validate_variable "ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY" "$ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY"
    validate_variable "ACTIVE_RECORD_ENCRYPTECORD_ENCRYPTION_KEY_DERIVATION_SALT" "$ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY"
    validate_variable "ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY" "$ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY"
    validate_variable "SMTP_PASSWORD" "$SMTP_PASSWORD"
    # Export the environment variables
    export SECRET_KEY_BASE
    export OTP_SECRET
    export VAPID_PRIVATE_KEY
    export VAPID_PUBLIC_KEY
    export ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY
    export ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT
    export ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY
    export SMTP_PASSWORD
    log "Environment variables successfully set."
}
# Main function to orchestrate the script
main() {
    check_dependencies
    fetch_json_from_ssm
    set_environment_variables
}

#ION_KEY_DERIVATION_SALT" "$ACTIVE_R Run the main function
main "$@"