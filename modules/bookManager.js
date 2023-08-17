export default class BookManager {
  constructor() {
    this.booksCollection = JSON.parse(localStorage.getItem("Books")) || [];
    this.eventListener();
  }

  updateLocalStorage = () => {
    localStorage.setItem("Books", JSON.stringify(this.booksCollection));
    document.querySelector("#book-title").value = "";
    document.querySelector("#author-name").value = "";
  };

  addBook = () => {
    const bookTitleValue = document.querySelector("#book-title").value;
    const authorNameValue = document.querySelector("#author-name").value;

    if (bookTitleValue && authorNameValue) {
      const newBook = { title: bookTitleValue, author: authorNameValue };
      this.booksCollection.push(newBook);
      this.updateLocalStorage();
      this.displayBooks();
    }
  };

  displayBooks = () => {
    const bookListInner = document.querySelector("#book-list-inner");
    bookListInner.innerHTML = "";
    this.booksCollection.forEach((book, index) => {
      bookListInner.innerHTML += `<div id=${index} class="book"><p>${book.title} by ${book.author}</p>
      <button class="remove-book" type="button">Remove</button></div>`;
    });
  };

  removeBook = (id) => {
    this.booksCollection.splice(id, 1);
    this.updateLocalStorage();
    this.displayBooks();
  };

  eventListener = () => {
    window.addEventListener("load", () => {
      this.displayBooks();
    });

    const addBookBtn = document.querySelector("#add-book");
    addBookBtn.addEventListener("click", () => {
      this.addBook();
    });

    const bookListInner = document.querySelector("#book-list");
    bookListInner.addEventListener("click", (event) => {
      this.removeBook(event.target.parentNode.id);
    });
  };
}
