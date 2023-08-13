document.addEventListener("DOMContentLoaded", () => {
  const booksCollection = JSON.parse(localStorage.getItem("books")) || [];
  const bookTitle = document.querySelector("#book-title");
  const authorName = document.querySelector("#author-name");
  const addBookBtn = document.querySelector("#add-book");
  const removeBookBtn = document.querySelector(".remove-book");

  function addBook() {
    const bookTitleValue = bookTitle.value;
    const authorNameValue = authorName.value;
    if (bookTitleValue == "" && authorNameValue == "") {
      return false;
    }

    booksCollection.push({ title: bookTitleValue, author: authorNameValue });
    updateLocalStorage();
    displayBooks(booksCollection);
  }

  function updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(booksCollection));
    bookTitle.value = "";
    authorName.value = "";
  }

  function displayBooks(booksCollection) {
    const bookList = document.querySelector("#book-list");
    bookList.innerHTML = "";
    booksCollection.forEach((book) => {
      bookList.innerHTML += `<div class="book"><p>${book["title"]} by ${book["author"]}</p>
      <button class="remove-book" type="button">Remove</button></div>`;
    });
  }

  function removeBook() {}

  addBookBtn.addEventListener("click", addBook);
  window.addEventListener("load", displayBooks(booksCollection));
});
