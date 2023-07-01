const entryDisplay = document.querySelector('.entry-card');



let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};


const addBookToLibrary = (obj) => {
    myLibrary.push(obj);
}

   
const meditations = new Book("Meditations", "Marcus Arelius", 256, "Read");
const metaphysics = new Book("Metaphysics", "Aristotle", 512, "Haven't Read");

addBookToLibrary(meditations);
addBookToLibrary(metaphysics)

console.log(myLibrary);