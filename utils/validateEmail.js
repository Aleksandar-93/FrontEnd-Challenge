function validateEmail(email) { //Validates the email address
    var emailInput = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailInput.test(email);
}

export default validateEmail;