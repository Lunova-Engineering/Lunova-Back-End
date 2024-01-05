const HttpStatus = {
    CONTINUE_100: { code: 100, message: "Continue" },
    SWITCHING_PROTOCOLS_101: { code: 101, message: "Switching Protocols" },
    PROCESSING_102: { code: 102, message: "Processing" }, // WebDAV; RFC 2518
    EARLY_HINTS_103: { code: 103, message: "Early Hints" },
    OK_200: { code: 200, message: "OK" },
    CREATED_201: { code: 201, message: "Created" },
    ACCEPTED_202: { code: 202, message: "Accepted" },
    NON_AUTHORITATIVE_INFORMATION_203: { code: 203, message: "Non-Authoritative Information" },
    NO_CONTENT_204: { code: 204, message: "No Content" },
    RESET_CONTENT_205: { code: 205, message: "Reset Content" },
    PARTIAL_CONTENT_206: { code: 206, message: "Partial Content" },
    MULTI_STATUS_207: { code: 207, message: "Multi-Status" }, // WebDAV; RFC 4918
    ALREADY_REPORTED_208: { code: 208, message: "Already Reported" }, // WebDAV; RFC 5842
    IM_USED_226: { code: 226, message: "IM Used" }, // RFC 3229
    MULTIPLE_CHOICES_300: { code: 300, message: "Multiple Choices" },
    MOVED_PERMANENTLY_301: { code: 301, message: "Moved Permanently" },
    FOUND_302: { code: 302, message: "Found" },
    SEE_OTHER_303: { code: 303, message: "See Other" },
    NOT_MODIFIED_304: { code: 304, message: "Not Modified" },
    USE_PROXY_305: { code: 305, message: "Use Proxy" },
    TEMPORARY_REDIRECT_307: { code: 307, message: "Temporary Redirect" },
    PERMANENT_REDIRECT_308: { code: 308, message: "Permanent Redirect" },
    BAD_REQUEST_400: { code: 400, message: "Bad Request" },
    UNAUTHORIZED_401: { code: 401, message: "Unauthorized" },
    PAYMENT_REQUIRED_402: { code: 402, message: "Payment Required" },
    FORBIDDEN_403: { code: 403, message: "Forbidden" },
    NOT_FOUND_404: { code: 404, message: "Not Found" },
    METHOD_NOT_ALLOWED_405: { code: 405, message: "Method Not Allowed" },
    NOT_ACCEPTABLE_406: { code: 406, message: "Not Acceptable" },
    PROXY_AUTHENTICATION_REQUIRED_407: { code: 407, message: "Proxy Authentication Required" },
    REQUEST_TIMEOUT_408: { code: 408, message: "Request Timeout" },
    CONFLICT_409: { code: 409, message: "Conflict" },
    GONE_410: { code: 410, message: "Gone" },
    LENGTH_REQUIRED_411: { code: 411, message: "Length Required" },
    PRECONDITION_FAILED_412: { code: 412, message: "Precondition Failed" },
    PAYLOAD_TOO_LARGE_413: { code: 413, message: "Payload Too Large" },
    URI_TOO_LONG_414: { code: 414, message: "URI Too Long" },
    UNSUPPORTED_MEDIA_TYPE_415: { code: 415, message: "Unsupported Media Type" },
    RANGE_NOT_SATISFIABLE_416: { code: 416, message: "Range Not Satisfiable" },
    EXPECTATION_FAILED_417: { code: 417, message: "Expectation Failed" },
    MISDIRECTED_REQUEST_421: { code: 421, message: "Misdirected Request" },
    UNPROCESSABLE_ENTITY_422: { code: 422, message: "Unprocessable Entity" }, // WebDAV; RFC 4918
    LOCKED_423: { code: 423, message: "Locked" }, // WebDAV; RFC 4918
    FAILED_DEPENDENCY_424: { code: 424, message: "Failed Dependency" }, // WebDAV; RFC 4918
    TOO_EARLY_425: { code: 425, message: "Too Early" },
    UPGRADE_REQUIRED_426: { code: 426, message: "Upgrade Required" },
    PRECONDITION_REQUIRED_428: { code: 428, message: "Precondition Required" },
    TOO_MANY_REQUESTS_429: { code: 429, message: "Too Many Requests" },
    REQUEST_HEADER_FIELDS_TOO_LARGE_431: { code: 431, message: "Request Header Fields Too Large" },
    UNAVAILABLE_FOR_LEGAL_REASONS_451: { code: 451, message: "Unavailable For Legal Reasons" },
    INTERNAL_SERVER_ERROR_500: { code: 500, message: "Internal Server Error" },
    NOT_IMPLEMENTED_501: { code: 501, message: "Not Implemented" },
    BAD_GATEWAY_502: { code: 502, message: "Bad Gateway" },
    SERVICE_UNAVAILABLE_503: { code: 503, message: "Service Unavailable" },
    GATEWAY_TIMEOUT_504: { code: 504, message: "Gateway Timeout" },
    HTTP_VERSION_NOT_SUPPORTED_505: { code: 505, message: "HTTP Version Not Supported" },
    VARIANT_ALSO_NEGOTIATES_506: { code: 506, message: "Variant Also Negotiates" },
    INSUFFICIENT_STORAGE_507: { code: 507, message: "Insufficient Storage" }, // WebDAV; RFC 4918
    LOOP_DETECTED_508: { code: 508, message: "Loop Detected" }, // WebDAV; RFC 5842
    NOT_EXTENDED_510: { code: 510, message: "Not Extended" },
    NETWORK_AUTHENTICATION_REQUIRED_511: { code: 511, message: "Network Authentication Required" },

    findStatusByCode: function(code) {
        return Object.values(this).find(status => typeof status === 'object' && status.code === code);
    }
};


module.exports = HttpStatus;