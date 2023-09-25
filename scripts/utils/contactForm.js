/* exported displayModal*/

function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const body = document.querySelector("body");
    const btnFermenture = document.querySelector(".fermer");
    modal.style.display = "block";
    main.style.backgroundColor = "white";
    main.style.backgroundColor.opacity = "80%";
    main.setAttribute('aria-hidden', 'true')
    modal.setAttribute('aria-hidden', 'false')
    body.setAttribute('class', 'no-scroll')
    btnFermenture.focus()
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const contact_modal = document.querySelector("#contact_modal");
    modal.style.display = "none";
    main.style.backgroundColor.opacity = "0%";
    main.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'true');
    contact_modal.focus()
}

//validation formulaire

//récupération des données du formulaire
let validation = document.getElementById('envoi');
let prenom = document.getElementById('first');
let erreurPrenom = document.getElementById('erreurPrenom');
let prenomValid = /^[a-zA-ZéèêîïÉÈÊôÔùçàÎÏÀ][A-Za-zéèêîïùçêôà]+(-'\s[a-zA-ZéèîïÉÈÊôÔùçàÎÏÀ][A-Za-zéèôêîïùçà]+)?/;
let nom = document.getElementById('last');
let erreurNom = document.getElementById('erreurNom');
let nomValid = /^[a-zA-ZéèêîïÉÈÊôÔùçàÎÏÀ][A-Za-zéèêîïùçêôà]+(-'\s[a-zA-ZéèîïÉÈÊôÔùçàÎÏÀ][A-Za-zéèôêîïùçà]+)?/;
let email = document.getElementById('email');
let erreurMail = document.getElementById('erreurMail');
let emailValid = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
let message = document.getElementById('message');
let erreurMessage = document.getElementById('erreurMessage');
let messageValid = /^[a-zA-ZéèêîïÉÈÊôÔùçàÎÏÀ][A-Za-zéèêîïùçêôà]+(-'\s[a-zA-ZéèîïÉÈÊôÔùçàÎÏÀ][A-Za-zéèôêîïùçà]+)?/;
let valid;//vérification de la validité du formulaire
const buttons = [...document.querySelectorAll('button')]

buttons.forEach((element) => {
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    })
})
validation.addEventListener("click", valider);


//fonction validation données formilaire
function valider(event) {
    event.preventDefault();
    valid = true;
    //validation prénom
    if (prenom.value === "") {
        erreurPrenom.textContent = "Merci de renseigner votre prénom";
        valid = false;
    } else if (prenomValid.test(prenom.value) == false) {
        erreurPrenom.textContent = "Format du prénom non valide";
        valid = false;
    } else {
        erreurPrenom.textContent = "";
    }

    //validation nom
    if (nom.value === "") {
        erreurNom.textContent = "Merci de renseigner votre nom";
        valid = false;
    } else if (nomValid.test(nom.value) == false) {
        erreurNom.textContent = "Format du nom non valide";
        valid = false;
    } else {
        erreurNom.textContent = "";
    }

    //validation email
    if (email.value === "") {
        erreurMail.textContent = "Merci de renseigner votre mail";
        valid = false;
    } else if (emailValid.test(email.value) == false) {
        erreurMail.textContent = "Format de l'email non valide";
        valid = false;
    } else {
        erreurMail.textContent = "";
    }

    //validation message
    if (message.value === "") {
        erreurMessage.textContent = "Merci de laisser un message indiquant votre demande";
        valid = false;
    } else if (messageValid.test(message.value) == false) {
        erreurMessage.textContent = "votre message doit contenir plus d'un caractère et commencer par une lettre";
        valid = false;
    } else {
        erreurMessage.textContent = "";
    }

    //traitement du formulaire
    if (valid === true) {
        console.log(prenom.value + " " + nom.value);
        console.log(email.value);
        console.log(message.value);
        prenom.value = "";
        nom.value = "";
        email.value = "";
        message.value = "";

        closeModal();
    }


}