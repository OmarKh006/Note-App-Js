import { addNotePage, homePage } from "./elements.js";

export const setViewedPage = (page) => {
  if (page === "home") {
    homePage.style.display = "flex";
    addNotePage.style.display = "none";
  } else if (page === "note") {
    homePage.style.display = "none";
    addNotePage.style.display = "block";
  }
};
