import { DateTime } from "./luxon.js";

const dateTime = () => {
  const currentDateElement = document.querySelector("#current-date");
  const now = DateTime.now();
  currentDateElement.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);
};

export { dateTime };
