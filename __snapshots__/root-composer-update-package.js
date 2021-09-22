exports['composer-update-package.json updateContent update version in root composer file 1'] = `
{
    "name": "google/cloud",
    "type": "library",
    "description": "Google Cloud Client Library",
    "keywords": [
        "google apis client",
        "google api client",
        "google apis",
        "google api",
        "google",
        "google cloud platform",
        "google cloud",
        "cloud",
        "bigtable",
        "bigquery",
        "big query",
        "datastore",
        "stackdriver logging",
        "kms",
        "language",
        "natural language",
        "pubsub",
        "pub sub",
        "spanner",
        "speech",
        "storage",
        "gcs",
        "tasks",
        "translate",
        "translation",
        "vision"
    ],
    "homepage": "http://github.com/googleapis/google-cloud-php",
    "license": "Apache-2.0",
    "authors": [
        {
            "name": "Dave Supplee",
            "email": "dwsupplee@gmail.com"
        },
        {
            "name": "John Pedrie",
            "email": "john@pedrie.com"
        }
    ],
    "require": {
        "php": ">=5.5",
        "rize/uri-template": "~0.3",
        "guzzlehttp/guzzle": "^5.3|^6.0",
        "guzzlehttp/psr7": "^1.2",
        "monolog/monolog": "^1.1|^2.0",
        "psr/http-message": "1.0.*",
        "ramsey/uuid": "~3",
        "google/gax": "^1.1",
        "google/common-protos": "^1.0",
        "google/auth": "^1.6",
        "google/crc32": "^0.1.0"
    },
    "require-dev": {
        "phpunit/phpunit": "^4.8|^5.0",
        "squizlabs/php_codesniffer": "2.*",
        "phpdocumentor/reflection": "^3.0",
        "symfony/console": "^3.0",
        "erusev/parsedown": "^1.6",
        "vierbergenlars/php-semver": "^3.0",
        "symfony/lock": "3.3.x-dev#1ba6ac9",
        "phpseclib/phpseclib": "^2",
        "google/cloud-tools": "^0.9.0",
        "opis/closure": "^3.0",
        "swaggest/json-schema": "^0.12.0"
    },
    "replace": {
        "google/cloud-asset": "0.4.0",
        "google/cloud-automl": "0.7.1",
        "google/cloud-bigquery": "1.12.1",
        "google/cloud-bigquerydatatransfer": "0.14.0",
        "google/cloud-bigtable": "1.1.0",
        "google/cloud-common-protos": "0.2.0",
        "google/cloud-container": "0.11.0",
        "google/cloud-core": "1.33.1",
        "google/cloud-dataproc": "0.15.0",
        "google/cloud-datastore": "1.10.0",
        "google/cloud-debugger": "0.19.1",
        "google/cloud-dialogflow": "0.10.0",
        "google/cloud-dlp": "0.22.0",
        "google/cloud-error-reporting": "0.15.0",
        "google/cloud-firestore": "1.9.0",
        "google/cloud-iot": "0.9.0",
        "google/cloud-kms": "1.7.0",
        "google/cloud-language": "0.21.0",
        "google/cloud-logging": "1.18.0",
        "google/cloud-monitoring": "0.18.0",
        "google/cloud-oslogin": "0.10.0",
        "google/cloud-pubsub": "1.18.0",
        "google/cloud-redis": "0.10.0",
        "google/cloud-scheduler": "1.1.0",
        "google/cloud-security-center": "0.2.0",
        "google/cloud-spanner": "1.20.0",
        "google/cloud-speech": "0.27.0",
        "google/cloud-storage": "1.14.0",
        "google/cloud-talent": "0.6.0",
        "google/cloud-tasks": "1.3.0",
        "google/cloud-text-to-speech": "0.5.0",
        "google/cloud-trace": "0.15.0",
        "google/cloud-translate": "1.5.0",
        "google/cloud-videointelligence": "1.7.0",
        "google/cloud-vision": "0.24.0",
        "google/cloud-web-risk": "0.3.0",
        "google/cloud-web-security-scanner": "0.2.0"
    },
    "suggest": {
        "opis/closure": "May be used to serialize closures to process jobs in the batch daemon. Please require version ^3.",
        "phpseclib/phpseclib": "May be used in place of OpenSSL for creating signed Cloud Storage URLs. Please require version ^2."
    },
    "autoload": {
        "psr-4": {
            "Google\\\\Cloud\\\\": [
                "src",
                "CommonProtos/src"
            ],
            "Google\\\\Cloud\\\\Asset\\\\": "Asset/src",
            "Google\\\\Cloud\\\\AutoMl\\\\": "AutoMl/src",
            "Google\\\\Cloud\\\\BigQuery\\\\": "BigQuery/src",
            "Google\\\\Cloud\\\\BigQuery\\\\DataTransfer\\\\": "BigQueryDataTransfer/src",
            "Google\\\\Cloud\\\\Bigtable\\\\": "Bigtable/src",
            "Google\\\\Cloud\\\\Container\\\\": "Container/src",
            "Google\\\\Cloud\\\\Core\\\\": "Core/src",
            "Google\\\\Cloud\\\\Dataproc\\\\": "Dataproc/src",
            "Google\\\\Cloud\\\\Datastore\\\\": "Datastore/src",
            "Google\\\\Cloud\\\\Debugger\\\\": "Debugger/src",
            "Google\\\\Cloud\\\\Dialogflow\\\\": "Dialogflow/src",
            "Google\\\\Cloud\\\\Dlp\\\\": "Dlp/src",
            "Google\\\\Cloud\\\\ErrorReporting\\\\": "ErrorReporting/src",
            "Google\\\\Cloud\\\\Firestore\\\\": "Firestore/src",
            "Google\\\\Cloud\\\\Iot\\\\": "Iot/src",
            "Google\\\\Cloud\\\\Kms\\\\": "Kms/src",
            "Google\\\\Cloud\\\\Language\\\\": "Language/src",
            "Google\\\\Cloud\\\\Logging\\\\": "Logging/src",
            "Google\\\\Cloud\\\\Monitoring\\\\": "Monitoring/src",
            "Google\\\\Cloud\\\\OsLogin\\\\": "OsLogin/src",
            "Google\\\\Cloud\\\\PubSub\\\\": "PubSub/src",
            "Google\\\\Cloud\\\\Redis\\\\": "Redis/src",
            "Google\\\\Cloud\\\\Scheduler\\\\": "Scheduler/src",
            "Google\\\\Cloud\\\\SecurityCenter\\\\": "SecurityCenter/src",
            "Google\\\\Cloud\\\\Spanner\\\\": "Spanner/src",
            "Google\\\\Cloud\\\\Speech\\\\": "Speech/src",
            "Google\\\\Cloud\\\\Storage\\\\": "Storage/src",
            "Google\\\\Cloud\\\\Talent\\\\": "Talent/src",
            "Google\\\\Cloud\\\\Tasks\\\\": "Tasks/src",
            "Google\\\\Cloud\\\\TextToSpeech\\\\": "TextToSpeech/src",
            "Google\\\\Cloud\\\\Trace\\\\": "Trace/src",
            "Google\\\\Cloud\\\\Translate\\\\": "Translate/src",
            "Google\\\\Cloud\\\\VideoIntelligence\\\\": "VideoIntelligence/src",
            "Google\\\\Cloud\\\\Vision\\\\": "Vision/src",
            "Google\\\\Cloud\\\\WebRisk\\\\": "WebRisk/src",
            "Google\\\\Cloud\\\\WebSecurityScanner\\\\": "WebSecurityScanner/src",
            "GPBMetadata\\\\Google\\\\": "CommonProtos/metadata",
            "GPBMetadata\\\\Google\\\\Bigtable\\\\": "Bigtable/metadata",
            "GPBMetadata\\\\Google\\\\Container\\\\": "Container/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Asset\\\\": "Asset/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Automl\\\\": "AutoMl/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Bigquery\\\\Datatransfer\\\\": "BigQueryDataTransfer/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Dataproc\\\\": "Dataproc/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Dialogflow\\\\": "Dialogflow/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Iot\\\\": "Iot/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Kms\\\\": "Kms/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Language\\\\": "Language/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Oslogin\\\\": "OsLogin/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Redis\\\\": "Redis/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Scheduler\\\\": "Scheduler/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Securitycenter\\\\": "SecurityCenter/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Speech\\\\": "Speech/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Talent\\\\": "Talent/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Tasks\\\\": "Tasks/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Texttospeech\\\\": "TextToSpeech/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Translate\\\\": "Translate/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Videointelligence\\\\": "VideoIntelligence/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Vision\\\\": "Vision/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Webrisk\\\\": "WebRisk/metadata",
            "GPBMetadata\\\\Google\\\\Cloud\\\\Websecurityscanner\\\\": "WebSecurityScanner/metadata",
            "GPBMetadata\\\\Google\\\\Datastore\\\\": "Datastore/metadata",
            "GPBMetadata\\\\Google\\\\Devtools\\\\Clouddebugger\\\\": "Debugger/metadata",
            "GPBMetadata\\\\Google\\\\Devtools\\\\Clouderrorreporting\\\\": "ErrorReporting/metadata",
            "GPBMetadata\\\\Google\\\\Devtools\\\\Cloudtrace\\\\": "Trace/metadata",
            "GPBMetadata\\\\Google\\\\Firestore\\\\": "Firestore/metadata",
            "GPBMetadata\\\\Google\\\\Logging\\\\": "Logging/metadata",
            "GPBMetadata\\\\Google\\\\Monitoring\\\\": "Monitoring/metadata",
            "GPBMetadata\\\\Google\\\\Privacy\\\\Dlp\\\\": "Dlp/metadata",
            "GPBMetadata\\\\Google\\\\Pubsub\\\\": "PubSub/metadata",
            "GPBMetadata\\\\Google\\\\Spanner\\\\": "Spanner/metadata"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "Google\\\\Cloud\\\\Dev\\\\": "dev/src",
            "Google\\\\Cloud\\\\Tests\\\\": "tests",
            "Google\\\\Cloud\\\\CommonProtos\\\\Tests\\\\": "CommonProtos/tests",
            "Google\\\\Cloud\\\\Asset\\\\Tests\\\\": "Asset/tests",
            "Google\\\\Cloud\\\\AutoMl\\\\Tests\\\\": "AutoMl/tests",
            "Google\\\\Cloud\\\\BigQuery\\\\Tests\\\\": "BigQuery/tests",
            "Google\\\\Cloud\\\\BigQuery\\\\DataTransfer\\\\Tests\\\\": "BigQueryDataTransfer/tests",
            "Google\\\\Cloud\\\\Bigtable\\\\Tests\\\\": "Bigtable/tests",
            "Google\\\\Cloud\\\\Container\\\\Tests\\\\": "Container/tests",
            "Google\\\\Cloud\\\\Core\\\\Tests\\\\": "Core/tests",
            "Google\\\\Cloud\\\\Dataproc\\\\Tests\\\\": "Dataproc/tests",
            "Google\\\\Cloud\\\\Datastore\\\\Tests\\\\": "Datastore/tests",
            "Google\\\\Cloud\\\\Debugger\\\\Tests\\\\": "Debugger/tests",
            "Google\\\\Cloud\\\\Dialogflow\\\\Tests\\\\": "Dialogflow/tests",
            "Google\\\\Cloud\\\\Dlp\\\\Tests\\\\": "Dlp/tests",
            "Google\\\\Cloud\\\\ErrorReporting\\\\Tests\\\\": "ErrorReporting/tests",
            "Google\\\\Cloud\\\\Firestore\\\\Tests\\\\": "Firestore/tests",
            "Google\\\\Cloud\\\\Iot\\\\Tests\\\\": "Iot/tests",
            "Google\\\\Cloud\\\\Kms\\\\Tests\\\\": "Kms/tests",
            "Google\\\\Cloud\\\\Language\\\\Tests\\\\": "Language/tests",
            "Google\\\\Cloud\\\\Logging\\\\Tests\\\\": "Logging/tests",
            "Google\\\\Cloud\\\\Monitoring\\\\Tests\\\\": "Monitoring/tests",
            "Google\\\\Cloud\\\\OsLogin\\\\Tests\\\\": "OsLogin/tests",
            "Google\\\\Cloud\\\\PubSub\\\\Tests\\\\": "PubSub/tests",
            "Google\\\\Cloud\\\\Redis\\\\Tests\\\\": "Redis/tests",
            "Google\\\\Cloud\\\\Scheduler\\\\Tests\\\\": "Scheduler/tests",
            "Google\\\\Cloud\\\\SecurityCenter\\\\Tests\\\\": "SecurityCenter/tests",
            "Google\\\\Cloud\\\\Spanner\\\\Tests\\\\": "Spanner/tests",
            "Google\\\\Cloud\\\\Speech\\\\Tests\\\\": "Speech/tests",
            "Google\\\\Cloud\\\\Storage\\\\Tests\\\\": "Storage/tests",
            "Google\\\\Cloud\\\\Talent\\\\Tests\\\\": "Talent/tests",
            "Google\\\\Cloud\\\\Tasks\\\\Tests\\\\": "Tasks/tests",
            "Google\\\\Cloud\\\\TextToSpeech\\\\Tests\\\\": "TextToSpeech/tests",
            "Google\\\\Cloud\\\\Trace\\\\Tests\\\\": "Trace/tests",
            "Google\\\\Cloud\\\\Translate\\\\Tests\\\\": "Translate/tests",
            "Google\\\\Cloud\\\\VideoIntelligence\\\\Tests\\\\": "VideoIntelligence/tests",
            "Google\\\\Cloud\\\\Vision\\\\Tests\\\\": "Vision/tests",
            "Google\\\\Cloud\\\\WebRisk\\\\Tests\\\\": "WebRisk/tests",
            "Google\\\\Cloud\\\\WebSecurityScanner\\\\Tests\\\\": "WebSecurityScanner/tests"
        }
    },
    "scripts": {
        "google-cloud": "dev/google-cloud",
        "style": "dev/sh/style",
        "tests": "dev/sh/tests"
    },
    "bin": [
        "Core/bin/google-cloud-batch",
        "Debugger/bin/google-cloud-debugger"
    ],
    "extra": {
        "component": {
            "id": "google-cloud",
            "target": "googleapis/google-cloud-php.git",
            "path": "src",
            "entry": [
                "Version.php",
                "ServiceBuilder.php"
            ]
        }
    },
    "version": "0.8.0"
}

`