import { Author } from "./author"


export interface Book {
    title : string
    pages : number
    isAvailable : boolean
    author : Author
}