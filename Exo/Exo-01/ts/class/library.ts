import { Book } from "../interfaces/book";

export class Library {
    books : Book[]

    constructor() {
        this.books = [];
    }

    addBook( book : Book){
        this.books.push(book)
    }

    removeBook(title: string){
        const bookIndex = this.books.findIndex((book) => book.title === title);

        if (bookIndex !== -1) {
        this.books.splice(bookIndex, 1);
        console.log(`Le livre "${title}" a été supprimé.`);
        } else {
        console.log(`Le livre "${title}" n'a pas été trouvé.`);
        }
    }

    findBookByTitle(title: string) : Book{
        const bookIndex = this.books.findIndex((book) => book.title === title);

        if (bookIndex !== -1) {
            return this.books[bookIndex];
        } else {
            return null
        }
    }

    listAvailableBooks(): Book[] {
        const availableBooks: Book[] = []; 
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].isAvailable) { 
                availableBooks.push(this.books[i]);
            }
        }
        return availableBooks; 
    }

    getBooksByAuthor(authorName: string):Book[]{
        const booksByAuthor : Book[] = []; 
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].author.name == authorName) { 
                booksByAuthor.push(this.books[i]);
            }
        }
        return booksByAuthor; 
    }
    
}


