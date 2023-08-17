import BookManager from './modules/bookManager.js';
import {
  showBookList,
  showNewBook,
  showContactUs,
} from './modules/navLinkClick.js';

import dateTime from './modules/dateAndTime.js';

// eslint-disable-next-line no-unused-vars
const bookManager1 = new BookManager();

showBookList();
showNewBook();
showContactUs();
dateTime();
