export class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(title) {
        const bookIndex = this.books.findIndex((book) => book.title === title);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            console.log(`Le livre "${title}" a été supprimé.`);
        }
        else {
            console.log(`Le livre "${title}" n'a pas été trouvé.`);
        }
    }
    findBookByTitle(title) {
        const bookIndex = this.books.findIndex((book) => book.title === title);
        if (bookIndex !== -1) {
            return this.books[bookIndex];
        }
        else {
            return null;
        }
    }
    listAvailableBooks() {
        const availableBooks = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].isAvailable) {
                availableBooks.push(this.books[i]);
            }
        }
        return availableBooks;
    }
    getBooksByAuthor(authorName) {
        const booksByAuthor = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].author.name == authorName) {
                booksByAuthor.push(this.books[i]);
            }
        }
        return booksByAuthor;
    }
}
