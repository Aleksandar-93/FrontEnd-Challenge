import addRemoveError from "./addRemoveError.js";
import displayHide from "./displayHide.js";
import resultChange from "./resultChange.js";

// email / phone validate 
function doValidate(){
    //add and remove error class
    addRemoveError();

    //change card info
    resultChange();
    
    // displey/hide/change  loading , howItsWork , search
    displayHide();
}

export default doValidate;