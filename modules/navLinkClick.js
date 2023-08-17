const list = document.querySelector("#list");
const newBook = document.querySelector("#add-new");
const contactUs = document.querySelector("#contact-us");

const bookList = document.querySelector("#book-list");
const addNewBook = document.querySelector("#add-new-book");
const contact = document.querySelector("#contact");

const showBookList = () => {
  list.addEventListener("click", () => {
    bookList.style.display = "block";
    addNewBook.style.display = "none";
    contact.style.display = "none";
  });
};

const showNewBook = () => {
  newBook.addEventListener("click", () => {
    addNewBook.style.display = "block";
    bookList.style.display = "none";
    contact.style.display = "none";
  });
};

const showContactUs = () => {
  contactUs.addEventListener("click", () => {
    contact.style.display = "block";
    addNewBook.style.display = "none";
    bookList.style.display = "none";
  });
};

export { showBookList, showNewBook, showContactUs };
