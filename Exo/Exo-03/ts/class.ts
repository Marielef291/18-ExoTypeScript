class Contact {
    id : number
    nom : string
    prenom : string
    email : string
    telephone : string
    dateNaissance :Date
    urlAvatar : string

    constructor(id : number, n : string, p : string, e: string, t : string, d : Date, a : string){
        this.id = id
        this.nom = n
        this.prenom = p
        this.email = e
        this.telephone = t
        this.dateNaissance = d
        this.urlAvatar = a
    }

}

export class ContactsManager {
    contacts : Contact[]

    constructor(){
        this.contacts=[]
    }


    //CREATE
    addContact (n : string, p : string, d : Date, e: string, t : string,  a : string) :void{
        let newId = this.contacts.length+1
        let newContact =  new Contact (newId, n, p, e, t, d, a)
        this.contacts.push(newContact)
        // console.log(newContact);
    }


    //READ ONE



    //READ ALL
    readConstacts ():Contact[]{
        return this.contacts
    }

    //UPDATE

    //DELETE
}