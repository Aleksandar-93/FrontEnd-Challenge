function validatePhone(phone) { //Validates the phone number
    var phoneInput = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/; 
    return phoneInput.test(phone);
}

export default validatePhone;