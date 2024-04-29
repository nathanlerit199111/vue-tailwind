export function checkMinLength(password) {
    return password.length >= 8;
};

export function checkUpperCase(password) {
    return /[A-Z]/.test(password);
};


export function checkLowerCase(password) {
    return /[a-z]/.test(password);
};
  
export function checkSpecialChar(password) {
    return /[!@#$%^&*(),.?":{}|<>]/.test(password);
};
  