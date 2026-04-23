import { addNotePage, homeBtn, homePage, noteBtn } from "./elements.js";

export const setViewedPage = (page) => {
  if (page === "home") {
    homePage.style.display = "flex";
    addNotePage.style.display = "none";
    homeBtn.setAttribute("aria-current", "page");
    noteBtn.removeAttribute("aria-current");
  } else if (page === "note") {
    homePage.style.display = "none";
    addNotePage.style.display = "block";
    homeBtn.removeAttribute("aria-current");
    noteBtn.setAttribute("aria-current", "page");
  }
};
