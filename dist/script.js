const entryDisplay = document.querySelector('.entry-card');



let myLibrary = [];

function Book(title, author, pages, read) {
    this.title
    this.author
    this.pages
    this.read
};


Book.prototype.addBookToLibrary = function () {
    myLibrary.push(this.title, this.author, this.pages, this.read);
}

const meditations = new Book("Meditations", "Marcus Arelius", 256, "Read");

meditations.addBookToLibrary();
console.log(myLibrary);