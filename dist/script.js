
const titleEntry = document.getElementById('title');
const authorEntry = document.getElementById('author');
const pageEntry = document.getElementById('pages');
const checkRead = document.getElementById('read');

const cardContainer = document.querySelector('.card-container');
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

// const displayBook = (arr) => {
    myLibrary.forEach((book) => {
    console.log(`Title: ${book.title} | Author: ${book.author} | Pages: ${book.pages} | Read: ${book.read}`)
    // const html = `<div class="entry-card p-7 flex items-center bg-transparent border-b-2 border-green-200">
    //      Title: ${book.title} | Author: ${book.author} | Pages: ${book.pages} | Read: ${book.read}
    //     </div>`;

    // cardContainer.insertAdjacentHTML('afterbegin', html);
});
// };

// displayBook(myLibrary);



const display = function () {
    cardContainer.textContent = `Book: ${titleEntry.value} | Author: ${authorEntry.value} | Page Count: ${pageEntry.value}`;
    titleEntry.value = '';
    authorEntry.value = '';
    pageEntry.value = '';
}

entryBtn.addEventListener('click', display);

const meditations = new Book("Meditations", "Marcus Arelius", 256, "Read");
const metaphysics = new Book("Metaphysics", "Aristotle", 512, "Haven't Read");

addBookToLibrary(meditations);
addBookToLibrary(metaphysics);

console.log(myLibrary);

// myLibrary.forEach((book) => {
//     entryDisplay.textContent = `Book: ${book.title} Author: ${book.author} Pages: ${book.pages}`;
//  }
// )   


