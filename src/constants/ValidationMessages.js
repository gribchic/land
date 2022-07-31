function template(strings, ...keys) {
    return (function(...values) {
        let dict = values[values.length - 1] || {};
        let result = [strings[0]];
        keys.forEach(function(key, i) {
            let value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
}

const VALIDATION_MESSAGES = {
    fieldRequired: template`${0} must not be empty`,
    emailInvalid: template`${0} is not a valid email address`,
    fieldNotUnique: template`${0} is not unique`,
    userNameInvalid: template`${0} must include only letters, ('), (-), (.) and spaces`,
    digitsLength: template`${0} must include ${1} digits`,
    maxLengthDigits: template`The length of ${0} must include ${1} digits or fewer`,
    phoneNumber: template`Please, enter ${0} in format: (123)-456-7890`,
    passwordInvalid: template`Password does not meet the requirements`,
    confirmPasswordNotMatch: template`Passwords do not match`,
    taxId: template`Please, enter ${0} in format: 12-3456789`,
    domain: `Website address should contain at least 2 characters before dot and 2 - after dot`,
    otherReasonInvalid: template`${0} must include only characters, ('), (-), (.) and spaces`,
    inclusiveBetween: template`${0} must be between ${1} and ${2}`,
    fileSizeInvalid: template`Maximum upload file size: ${0}`,
    availableFileFormats: template`Only ${0} can be uploaded`,
    passwordIsIncorrect: template`${0} is incorrect`
};

export default VALIDATION_MESSAGES;
