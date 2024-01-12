

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const strongPasswordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!*_])[A-Za-z\d@#$%^&+=!*_]{8,}$/;



const isEmailValid = (email) => {
    return emailPattern.test(email);
}

const isPasswordStrong = (password) => {
    return strongPasswordPattern.test(password);
}

module.exports = {
    isEmailValid,
    isPasswordStrong
}