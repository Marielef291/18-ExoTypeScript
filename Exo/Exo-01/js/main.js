import { createBook, toggleAvailability } from "./utils/booksUtils.js";
import { Library } from "./class/library.js";
// Création des auteurs
const Rowling = {
    name: "J.K. Rowling",
    birthYear: 1965,
    genres: ["Fantasy", "Drama", "Young Adult"]
};
const Orwell = {
    name: "George Orwell",
    birthYear: 1903,
    genres: ["Dystopian", "Science Fiction"]
};
const Tolkien = {
    name: "J.R.R. Tolkien",
    birthYear: 1892,
    genres: ["Fantasy", "Adventure"]
};
const Lewis = {
    name: "C.S. Lewis",
    birthYear: 1898,
    genres: ["Fantasy", "Christian Literature"]
};
const Shelley = {
    name: "Mary Shelley",
    birthYear: 1797,
    genres: ["Gothic Fiction", "Science Fiction"]
};
const Austen = {
    name: "Jane Austen",
    birthYear: 1775,
    genres: ["Romance", "Literature"]
};
const Fitzgerald = {
    name: "F. Scott Fitzgerald",
    birthYear: 1896,
    genres: ["Tragedy", "Fiction"]
};
// Création des livres
console.log("📚 Création des livres 📚");
const HP1 = createBook("Harry Potter et la pierre philosophale", Rowling, 350);
const book1984 = createBook("1984", Orwell, 328);
const lotr = createBook("Le Seigneur des Anneaux", Tolkien, 1178);
const narnia = createBook("Le Lion, la Sorcière blanche et l'Armoire magique", Lewis, 208);
const frankenstein = createBook("Frankenstein", Shelley, 280);
const prideAndPrejudice = createBook("Orgueil et Préjugés", Austen, 432);
const gatsby = createBook("Gatsby le Magnifique", Fitzgerald, 180);
console.log("✨ Livres créés :");
console.log(HP1);
console.log(book1984);
// Création de la librairie
const librairie = new Library();
console.log("🏛️ Librairie créée");
// Ajout des livres à la librairie
librairie.addBook(HP1);
librairie.addBook(book1984);
librairie.addBook(lotr);
librairie.addBook(narnia);
librairie.addBook(frankenstein);
librairie.addBook(prideAndPrejudice);
librairie.addBook(gatsby);
console.log("📚 Liste des livres disponibles dans la librairie :");
console.table(librairie.listAvailableBooks());
// Changement de disponibilité
console.log("🔄 Changement de disponibilité pour 'Le Seigneur des Anneaux' et 'Le Lion, la Sorcière blanche et l'Armoire magique'...");
toggleAvailability(lotr);
toggleAvailability(narnia);
console.log("📚 Livres disponibles après mise à jour :");
console.table(librairie.listAvailableBooks());
// Recherche par titre
console.log("🔍 Recherche du livre par titre : 'Frankenstein' :");
console.log(librairie.findBookByTitle("Frankenstein"));
// Recherche par auteur
console.log("🔍 Recherche des livres de 'Jane Austen' :");
console.table(librairie.getBooksByAuthor("Jane Austen"));
// Suppression de livre
console.log("❌ Suppression du livre 'Orgueil et Préjugés'...");
librairie.removeBook("Orgueil et Préjugés");
console.log("❌ Tentative de suppression d'un livre qui n'existe pas ('test')...");
librairie.removeBook("test");
// Liste finale des livres après suppression
console.log("📚 Liste des livres après suppression :");
console.table(librairie.listAvailableBooks());
