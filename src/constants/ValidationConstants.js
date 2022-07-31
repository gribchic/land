const VALIDATION_CONSTANTS = {
    COMPANY_NAME: {
        maxLength: 100
    },
    USER_NAME: {
        maxLength: 60,
        allowedSymbolsRegex: /^[-a-zA-Z\s'.]*$/
    },
    EMAIL: {
        maxLength: 100
    },
    PHONE: {
        length: 10
    }
};

export default VALIDATION_CONSTANTS;
