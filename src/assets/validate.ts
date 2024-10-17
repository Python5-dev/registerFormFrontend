const validateEmail = (email:string):boolean => {
    return /^[A-Za-z\d]+(?:[.%_+][A-Za-z\d]+)*@[A-Za-z\d]+\.[A-Za-z]{2,}$/.test(email);
}

const validatePassword = (password:string):boolean => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/.test(password);
}

export { validateEmail, validatePassword };