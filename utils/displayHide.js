import get from "./getElement.js";

const emailInputWrap = get('.input-email-wrap');
const phoneInputWrap= get('.input-phone-wrap');
const emailInput = get('#input-email');
const phoneInput = get('#input-phone');
const howItsWork = get('.how-it-works');
const loading = get('.loading');
const search  = get('.search');
const result = get('.results');
const titleH1 = get('.title h1');
const titleH2 = get('.title h2');
const titleP = get('.title p');
const wontBeNot = get('.wont-be-notified');

function displayHide(){
    if(!emailInputWrap.classList.contains('input-error') && !phoneInputWrap.classList.contains('input-error')){
        howItsWork.style.display="none";
        search.style.display="none";
        loading.style.display="flex";
        result.style.display="none";
            emailInput.value="";
            phoneInput.value="";
            titleH1.textContent = "Can’t Find The Right Person?";
            titleP.style.display="none";
            wontBeNot.style.display="none";
            titleH2.style.display="block";
        setTimeout(function(){
             loading.style.display="none";
             search.style.display="block";
             result.style.display="flex";
            }, 1000);
    }else{
        result.style.display="none";
    }
}

export default displayHide;