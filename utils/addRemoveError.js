
import get from "./getElement.js";
import person from "./person.js";
import validateEmail from "./validateEmail.js";
import validatePhone from "./validatePhone.js";

const emailInput = get('#input-email');
const phoneInput = get('#input-phone');

function addRemoveError(){
     if (person.email != emailInput.value && !validateEmail(emailInput.value)){
    emailInput.parentElement.classList.add('input-error');
    }else{
    emailInput.parentElement.classList.remove('input-error');
    }
   if ( person.phone != phoneInput.value && !validatePhone(phoneInput.value) ){
    phoneInput.parentElement.classList.add('input-error');
    }else{
    phoneInput.parentElement.classList.remove('input-error');
    }
}

export default addRemoveError;