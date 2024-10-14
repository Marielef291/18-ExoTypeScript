class Contact {
    constructor(id, n, p, e, t, d, a) {
        this.id = id;
        this.nom = n;
        this.prenom = p;
        this.email = e;
        this.telephone = t;
        this.dateNaissance = d;
        this.urlAvatar = a;
    }
}
export class ContactsManager {
    constructor() {
        this.contacts = [];
    }
    //CREATE
    addContact(n, p, d, e, t, a) {
        let newId = this.contacts.length + 1;
        let newContact = new Contact(newId, n, p, e, t, d, a);
        this.contacts.push(newContact);
        // console.log(newContact);
    }
    //READ ONE
    //READ ALL
    readConstacts() {
        return this.contacts;
    }
}
