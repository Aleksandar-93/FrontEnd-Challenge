import doValidate from "./utils/doValidate.js";
import get from "./utils/getElement.js";


const goBtn = get('#search-button');

const emailBtn = get('#email-btn');
const phoneBtn = get('#phone-btn');
const emailInputWrap = get('.input-email-wrap');
const phoneInputWrap= get('.input-phone-wrap');


// PHONE / Email btn and input show hide 
phoneBtn.addEventListener('click', (e)=>{
    e.currentTarget.classList.add('active')
    emailBtn.classList.remove('active');
    phoneInputWrap.style.display ="block";
    emailInputWrap.style.display = "none";
})
emailBtn.addEventListener('click', (e)=>{
    e.currentTarget.classList.add('active')
    phoneBtn.classList.remove('active');
    phoneInputWrap.style.display ="none";
    emailInputWrap.style.display = "block";
});

// email / phone validate 
goBtn.addEventListener('click', doValidate);