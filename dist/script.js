
const titleEntry = document.getElementById('title');
const authorEntry = document.getElementById('author');
const pageEntry = document.getElementById('pages');
const checkRead = document.getElementById('read');

const entryDisplay = document.querySelector('.entry-card');
const entryBtn = document.querySelector('.add-entry');
const deleteBtn = document.querySelector('.delete-entry');


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};


const addBookToLibrary = obj => {
    myLibrary.push(obj);
}

const displayBook = function () {
    for (const book of myLibrary) {
        entryDisplay.textContent = book;
}
}

const display = function () {
    entryDisplay.textContent = `Book: ${titleEntry.value} | Author: ${authorEntry.value} | Page Count: ${pageEntry.value}`;
    titleEntry.value = '';
    authorEntry.value = '';
    pageEntry.value = '';
}

entryBtn.addEventListener('click', display);

const meditations = new Book("Meditations", "Marcus Arelius", 256, "Read");
const metaphysics = new Book("Metaphysics", "Aristotle", 512, "Haven't Read");

addBookToLibrary(meditations);
addBookToLibrary(metaphysics);

// console.log(myLibrary);

// myLibrary.forEach((book) => {
//     entryDisplay.textContent = `Book: ${book.title} Author: ${book.author} Pages: ${book.pages}`;
//  }
// )   


