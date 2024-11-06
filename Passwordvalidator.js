function passwordValidator(password) {
    const isLongEnough = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);

    return isLongEnough && hasUppercase && hasLowercase && hasDigit;
}

console.log(passwordValidator("Rudra23564"));
console.log(passwordValidator("Rudra@23564"));
console.log(passwordValidator("Rua@04"));