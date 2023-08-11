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

  addBookBtn.addEventListener("click", addBook);
});
