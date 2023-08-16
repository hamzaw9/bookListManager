/* document.addEventListener("DOMContentLoaded", () => {
  const booksCollection = JSON.parse(localStorage.getItem("books")) || [];
  const bookList = document.querySelector("#book-list");
  const bookTitle = document.querySelector("#book-title");
  const authorName = document.querySelector("#author-name");
  const addBookBtn = document.querySelector("#add-book");

  function updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(booksCollection));
    bookTitle.value = "";
    authorName.value = "";
  }

  function displayBooks(booksCollection) {
    bookList.innerHTML = "";
    booksCollection.forEach((book) => {
      bookList.innerHTML += `<div class="book"><p>${book.title} by ${book.author}</p>
      <button class="remove-book" type="button">Remove</button></div>`;
    });
  }

  function addBook() {
    const bookTitleValue = bookTitle.value;
    const authorNameValue = authorName.value;

    if (bookTitleValue === "" || authorNameValue === "") {
      return false;
    }

    booksCollection.push({ title: bookTitleValue, author: authorNameValue });
    updateLocalStorage();
    displayBooks(booksCollection);
    return true;
  }

  function removeBook() {
    const removeBookBtns = document.querySelectorAll(".remove-book");
    for (let i = 0; i < removeBookBtns.length; i += 1) {
      removeBookBtns[i].addEventListener("click", () => {
        booksCollection.splice(i, 1);
        bookList.removeChild(bookList.children[i]);
        updateLocalStorage();
        displayBooks(booksCollection);
      });
    }
  }

  addBookBtn.addEventListener("click", addBook);
  window.addEventListener("load", displayBooks(booksCollection));
  bookList.addEventListener("click", removeBook);
}); */

class BookManager {
  constructor() {
    this.booksCollection = JSON.parse(localStorage.getItem("Books")) || [];
  }

  updateLocalStorage() {
    localStorage.setItem("Books", JSON.stringify(this.booksCollection));
    document.querySelector("#book-title").value = "";
    document.querySelector("#author-name").value = "";
  }

  addBook() {
    const bookTitleValue = document.querySelector("#book-title").value;
    const authorNameValue = document.querySelector("#author-name").value;

    if (bookTitleValue && authorNameValue) {
      const newBook = { title: bookTitleValue, author: authorNameValue };
      this.booksCollection.push(newBook);
      this.updateLocalStorage();
      this.displayBooks();
    }
  }

  displayBooks() {
    const bookListInner = document.querySelector("#book-list-inner");
    bookListInner.innerHTML = "";
    this.booksCollection.forEach((book, index) => {
      bookListInner.innerHTML += `<div id=${index} class="book"><p>${book.title} by ${book.author}</p>
      <button class="remove-book" type="button">Remove</button></div>`;
    });
  }

  removeBook(id) {
    this.booksCollection.splice(id, 1);
    this.updateLocalStorage();
    this.displayBooks();
  }
}

const bookManager1 = new BookManager();

window.addEventListener("load", () => {
  bookManager1.displayBooks();
});

const addBookBtn = document.querySelector("#add-book");
addBookBtn.addEventListener("click", () => {
  bookManager1.addBook();
});

const bookListInner = document.querySelector("#book-list");
bookListInner.addEventListener("click", (event) => {
  bookManager1.removeBook(event.target.parentNode.id);
});

/***** Current Date *****/

const currentDate = new Date().toDateString();
const currentDateElement = document.querySelector("#current-date");

currentDateElement.innerHTML = currentDate;
