document.addEventListener('DOMContentLoaded', () => {
  const booksCollection = JSON.parse(localStorage.getItem('books')) || [];
  const bookList = document.querySelector('#book-list');
  const bookTitle = document.querySelector('#book-title');
  const authorName = document.querySelector('#author-name');
  const addBookBtn = document.querySelector('#add-book');

  function updateLocalStorage() {
    localStorage.setItem('books', JSON.stringify(booksCollection));
    bookTitle.value = '';
    authorName.value = '';
  }

  function displayBooks(booksCollection) {
    bookList.innerHTML = '';
    booksCollection.forEach((book) => {
      bookList.innerHTML += `<div class="book"><p>${book.title} by ${book.author}</p>
      <button class="remove-book" type="button">Remove</button></div>`;
    });
  }

  function addBook() {
    const bookTitleValue = bookTitle.value;
    const authorNameValue = authorName.value;

    if (bookTitleValue === '' || authorNameValue === '') {
      return false;
    }

    booksCollection.push({ title: bookTitleValue, author: authorNameValue });
    updateLocalStorage();
    displayBooks(booksCollection);
    return true;
  }

  function removeBook() {
    const removeBookBtns = document.querySelectorAll('.remove-book');
    for (let i = 0; i < removeBookBtns.length; i += 1) {
      removeBookBtns[i].addEventListener('click', () => {
        booksCollection.splice(i, 1);
        bookList.removeChild(bookList.children[i]);
        updateLocalStorage();
        displayBooks(booksCollection);
      });
    }
  }

  addBookBtn.addEventListener('click', addBook);
  window.addEventListener('load', displayBooks(booksCollection));
  bookList.addEventListener('click', removeBook);
});
