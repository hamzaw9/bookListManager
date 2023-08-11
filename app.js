document.addEventListener("DOMContentLoaded", () => {
  const booksCollection = JSON.parse(localStorage.getItem("books")) || [];

  const bookTitle = document.querySelector("#book-title");
  const authorName = document.querySelector("#author-name");
  const addBookBtn = document.querySelector("#add-book");

  function addBook() {
    const bookTitleValue = bookTitle.value;
    const authorNameValue = authorName.value;
    booksCollection.push({ title: bookTitleValue, author: authorNameValue });
    updateLocalStorage();
  }

  function updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(booksCollection));
    bookTitle.value = "";
    authorName.value = "";
  }

  function displayBooks(booksCollection) {
    const bookList = document.querySelector("#book-list");
    booksCollection.forEach((book) => {
      bookList.innerHTML += `<div class="book"><p>${book["title"]} by ${book["author"]}</p>
      <button id="remove-book" type="button">Remove</button></div>`;
      console.log(`${book["title"]} by ${book["author"]}`);
    });
  }

  displayBooks(booksCollection);

  addBookBtn.addEventListener("click", addBook);
});
