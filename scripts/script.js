// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailinput = document.querySelector("#email-input");
const passwordinput = document.querySelector("#password-input");
const passwordconfirm = document.querySelector("#password-confirm-input")
// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn")
// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event


// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = ()=>{
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailinput.onkeyup = ()=>{
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

passwordinput.onkeyup = ()=>{
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

passwordconfirm.onkeyup = ()=>{
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};



// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPasswordOk = false;
  isPasswordConfirmOk = false;

  // validate first name


    if(firstNameInput.value.length<=0){
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
    }
  
  // validate last name

  if(lastNameInput.value.length<=0){
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
    }

  // validate email

  if(validateEmail(emailinput.value)){
    emailinput.classList.add("is-invalid");
    isEmailOk = true;
  } else {
    firstNameInput.classList.add("is-valid");
    
    }

  // validate password
  if(passwordinput.value.length<6){
    passwordinput.classList.add("is-invalid");
  } else {
    passwordinput.classList.add("is-valid");
    isPasswordOk = true;
    }
  // validate confirm password

 if(passwordconfirm.value!==passwordinput.value || passwordconfirm.value.length == 0){
  passwordconfirm.classList.add("is-invalid");

 }else{

  passwordconfirm.classList.add("is-valid");
  isPasswordConfirmOk = true;
 }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && isPasswordConfirmOk == true)
    alert("Registered successfully");
};

// add callback function for Reset button.
resetBtn.onclick=()=>{  
  firstNameInput.value="";
  lastNameInput.value="";
  emailinput.value="";
  passwordinput.value="";
  passwordconfirm.value="";




  isFirstNameOk =false;
  isLastNameOk = false;
  isEmailOk=false;
  isPasswordOk=false;
  isPasswordConfirmOk=false;



  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid")


  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");


  emailinput.classList.remove("is-valid");
  emailinput.classList.remove("is-invalid");



  passwordinput.classList.remove("is-valid");
  passwordinput.classList.remove("is-invalid");



  passwordconfirm.classList.remove("is-valid");
  passwordconfirm.classList.remove("is-invalid");






}