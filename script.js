let myLibrary = [];


class Book {
    constructor(
      title = "Unknown", 
      author = "Unknown", 
      pages = 0, 
      read = false
      ) {
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
const form = document.querySelector("form");



//buttons listeners
addBookBtn.addEventListener("click", () => addBook(getBook()));
openFormBtn.addEventListener("click", () => openForm());


//add new book to the library
function addBook(book) {
  if (checkBook(book.title) !== false) {
    return alert("You already have it!");
  }
  myLibrary.push(book);
  addBookCard(book);
  closeForm();
}

//check book in library 
function checkBook(title) {
  return myLibrary.some((book) => book.title === title);
};

//add new book card
function addBookCard(book) {

    //new DOM
    const card = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("button");
    const cross = document.createElement("button");

    //add classes to new DOM
    card.classList.add("card");
    cross.classList.add("cross");

    //add content to new DOM
    title.textContent = `${book.title}`;
    author.textContent = `${book.author}`;
    pages.textContent = `${book.pages} pages`;
    cross.textContent = "x";

    if (book.read) {
      read.textContent = "Read";
      read.classList.add("read");
    }
    else {
      read.textContent = "Not read yet";
      read.classList.add("noread");
    }

    //add containers
    grid.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(cross);

    //buttons listeners
    cross.addEventListener("click", () => remove(book.title));
    read.addEventListener("click", () => toggleRead(book.title))
};

//toggle read
function toggleRead(title) {
  console.log (title)
  myLibrary = myLibrary.map(book => {
    if (book.title === title) {
      if (book.read) {
        book.read = false;
        return book;
      }
      else {
        book.read = true;
        return book;
      }
    }
    else {
      return book;
    }
  })
  updateGrid();
};

//form
function openForm() {
    document.getElementById("popup").style.display = "block";
    form.reset();
  }
  
  function closeForm() {
    document.getElementById("popup").style.display = "none";
  }
//


function getBook () {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('readAsk').checked;
    return new Book(title, author, pages, read)
  }

const firstBook = new Book ("good book", "author", "66", "have read");

//remove book
function remove(title) {
  myLibrary = myLibrary.filter(book => book.title !== title);
  updateGrid();
};

//update grid
function updateGrid() {
  resetGrid();
  myLibrary.forEach(book => addBookCard(book)); 
};

//clear grid
function resetGrid() {
  grid.innerHTML = "";
};


