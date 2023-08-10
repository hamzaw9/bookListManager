document.addEventListener("DOMContentLoaded", () => {
  const booksCollection = [];
  const bookTitle = document.querySelector("#book-title");
  const authorName = document.querySelector("#author-name");
  const addBookBtn = document.querySelector("#add-book");

  function addBook() {
    const bookTitleValue = bookTitle.value;
    const authorNameValue = authorName.value;
    booksCollection.push({ title: bookTitleValue, author: authorNameValue });
    bookTitle.value = "";
    authorName.value = "";
  }

  addBookBtn.addEventListener("click", addBook);
});
