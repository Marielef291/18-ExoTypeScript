import { Author } from "../interfaces/author";
import { Book } from "../interfaces/book";

export function createBook (t : string, a: Author, nP : number ) : Book{
    return {
        title : t,
        author : a,
        pages : nP,
        isAvailable : true
    }
}

export function toggleAvailability (b : Book){
    if (b.isAvailable = false){
        b.isAvailable = true
    }else {
        b.isAvailable = false
    }
}



