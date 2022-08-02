const modal =  document.querySelector('.modal');
const launchBtn = document.querySelector('.contact_button');
const modalbg = document.querySelector('.modalbg');
const sent = document.querySelector('#sent');
//Lancer la modal
launchBtn.onclick = function() {
    modal.style.display = "block";
    document.getElementById('nom').innerText = document.getElementById('contactName').innerText;
}


var closeModalCross = document.getElementsByClassName("close")[0];
var closeModaleCross2 = document.getElementsByClassName("close2")[0];
const closeModalBtn = document.getElementById('fermer');

closeModalCross.addEventListener('click', closeModal);
closeModaleCross2.addEventListener('click', closeModal);
closeModalBtn.addEventListener('click', closeModal);

//Fermer la modal
function closeModal() {
    modal.style.display = "none";
    modalbg.style.display = "block";
    sent.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalbg.style.display = "block";
        sent.style.display = "none";
    }
}

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

const firstNameError = document.querySelector("#firstErr");
const lastNameError = document.querySelector("#lastErr");
const emailError = document.querySelector("#emailErr");
const messageError = document.querySelector("#messageErr");

let firstNameIsValid = false;
let lastNameIsValid = false;
let emailIsValid = false;
let dateIsValid = false;

const nameReg = /^[a-zA-Z]+$/;
const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const form = document.getElementById('form');

//verification des données 
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (firstName.value.match(nameReg) && firstName.value.length >1) {
        firstNameError.innerText = "";
    firstNameIsValid = true;
    } else {
        firstNameError.innerText = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "(Deux caractères minimum de aA à zZ)";
    firstNameIsValid = false;
    }
  
    if (lastName.value.match(nameReg) && lastName.value.length >1) {
        lastNameError.innerText = "";
    lastNameIsValid = true;
    } else {
        lastNameError.innerText = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "(Deux caractères minimum de aA à zZ)";
    firstNameIsValid = false;
    }
  
    if (email.value.match(emailReg)) {
        emailError.innerText = "";
    emailIsValid = true;
    } else {
        emailError.innerText = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "(Veuillez saisir une adresse email valide!)";
    firstNameIsValid = false;
    }
  
    if (message.value.length > 1) {
        messageError.innerText = "";
    messageIsValid = true;
    } else {
        messageError.innerText = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "(Veuillez saisir votre message)";
    firstNameIsValid = false;
    }
  
    if (firstNameIsValid && lastNameIsValid && emailIsValid && messageIsValid){
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        message.value = "";
        modalbg.style.display = "none";
        sent.style.display = "block";
    }
});