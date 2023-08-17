import BookManager from "./modules/bookManager.js";
import {
  showBookList,
  showNewBook,
  showContactUs,
} from "./modules/navLinkClick.js";

import { dateTime } from "./modules/dateAndTime.js";

const bookManager1 = new BookManager();

showBookList();
showNewBook();
showContactUs();
dateTime();
