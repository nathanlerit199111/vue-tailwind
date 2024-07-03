export const passwordRules = {
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasSpecialChar: false
};

export function validatePassword(password) {
    passwordRules.minLength = checkMinLength(password);
    passwordRules.hasUpperCase = checkUpperCase(password);
    passwordRules.hasLowerCase = checkLowerCase(password);
    passwordRules.hasSpecialChar = checkSpecialChar(password);
}

export function checkMinLength(password) {
    return password.length >= 8;
}

export function checkUpperCase(password) {
    return /[A-Z]/.test(password);
}

export function checkLowerCase(password) {
    return /[a-z]/.test(password);
}

export function checkSpecialChar(password) {
    return /[!@#$%^&*(),.?":{}|<>]/.test(password);
}
