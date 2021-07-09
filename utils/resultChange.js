import get from "./getElement.js";
import person from "./person.js";


const number = get('#number');
const card = get('#card');
const resultP = get('.result-card p');
const emailInput = get('#input-email');
const phoneInput = get('#input-phone');

function resultChange(){
    if(person.email != emailInput.value || person.phone != phoneInput.value ){
        number.textContent="0";
        card.style.display="none";
        resultP.textContent="Try starting a new search below";
    }else{
        number.textContent="1";
        card.style.display="block";
        resultP.textContent="Look at the result below to see the details of the person you’ve searched for.";
    }
}

export default resultChange;