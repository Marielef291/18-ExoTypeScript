import { ContactsManager } from "./class.js";
console.log("hello ts");
const contactForm = document.getElementById("contactForm_modale");
const firstname_modal = document.getElementById("firstname_modal");
const lastname_modal = document.getElementById("lastname_modal");
const date_modale = document.getElementById("date_of_birth_modal");
const email_modal = document.getElementById("email_modal");
const phone_modal = document.getElementById("phone_modal");
const avatar_modal = document.getElementById("avatar_modal");
const closeButton = document.querySelector('button[data-bs-dismiss="modal"]');
const managerContact = new ContactsManager;
// Fonction pour vider les champs du formulaire
function clearForm() {
    firstname_modal.value = "";
    lastname_modal.value = "";
    date_modale.value = "";
    email_modal.value = "";
    phone_modal.value = "";
    avatar_modal.value = "";
}
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstnameValue = firstname_modal.value;
    const lastnameValue = lastname_modal.value;
    const dateValue = date_modale.valueAsDate;
    const emailValue = email_modal.value;
    const phoneValue = phone_modal.value;
    const avatarURL = avatar_modal.value;
    managerContact.addContact(firstnameValue, lastnameValue, dateValue, emailValue, phoneValue, avatarURL);
    console.log(managerContact.readConstacts());
    // Appel de la fonction pour vider les champs
    clearForm();
    // // Fermer la modale après soumission
    if (closeButton) {
        closeButton.click();
    }
    else {
        console.error("Le bouton de fermeture de la modale n'a pas été trouvé.");
    }
});
console.log(managerContact.readConstacts());
