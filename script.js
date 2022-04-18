let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title,
            this.author = author,
            this.pages = pages,
            this.read = read;
    }
};


//current DOM

const grid = document.getElementById("grid");
const addBookBtn = document.getElementById("addBook");
const openFormBtn = document.getElementById("openForm");

//buttons listeners
addBookBtn.addEventListener("click", () => addBookToLibrary(getBook()));
openFormBtn.addEventListener("click", () => openForm());



//add new book to the library
function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);

    //new DOM
    const card = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("button");
    const cross = document.createElement("button");

    //add classes to new DOM
    card.classList.add("card");
    read.classList.add("read");
    cross.classList.add("cross");

    //add content to new DOM
    title.textContent = `${book.title}`;
    author.textContent = `${book.author}`;
    pages.textContent = `${book.pages} pages`;
    read.textContent = `${book.read}`;
    cross.textContent = "x";

    //add containers
    grid.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(cross);

    //buttons listeners
    //cross.addEventListener("click", () => remove);
};

//form
function openForm() {
    document.getElementById("popup").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("popup").style.display = "none";
  }
//

function getBook () {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    //const isRead = document.getElementById('read').checked
    return new Book(title, author, pages, /* isRead */)
  }

const firstBook = new Book ("good book", "author", "66", "have read");



