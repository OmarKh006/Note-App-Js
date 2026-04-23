import {
  addNotePage,
  aside,
  burgerMenu,
  collapseButton,
  goToAddNoteBtn,
  headerSearchForm,
  homeBtn,
  mainHeader,
  navigationButtons,
  nonLaptopLogo,
  noteBtn,
  notes,
  notesContainer,
  notesElements,
  searchIconToggle,
} from "./elements.js";
import { setViewedPage } from "./setViewedPage.js";

navigationButtons?.forEach((button) => {
  button?.addEventListener("click", (clicked) => {
    navigationButtons?.forEach((b) => {
      b.removeAttribute("aria-current");
    });
    clicked.currentTarget.setAttribute("aria-current", "page");
    if (clicked.currentTarget.dataset.page === "home") setViewedPage("home");
    else if (clicked.currentTarget.dataset.page === "note")
      setViewedPage("note");
  });
});

notesElements?.forEach((note) => {
  note?.addEventListener("click", (clickedNote) => {
    notesElements?.forEach((n) => {
      n.classList.remove("selected");
    });
    clickedNote.currentTarget.classList.add("selected");
  });
});

goToAddNoteBtn?.addEventListener("click", () => {
  setViewedPage("note");
  noteBtn?.setAttribute("aria-current", "page");
  homeBtn?.removeAttribute("aria-current");
});

collapseButton?.addEventListener("click", () => {
  aside?.classList.toggle("collapsed");
});

burgerMenu?.addEventListener("change", () => {
  mainHeader?.classList.toggle("burgerChecked");
  addNotePage?.classList.toggle("burgerChecked");
  nonLaptopLogo?.classList.toggle("burgerChecked");
  headerSearchForm?.classList.toggle("shrinked");
});

searchIconToggle?.addEventListener("click", () => {
  headerSearchForm?.classList.toggle("collapse");
});

notes?.forEach((note) => {
  note?.addEventListener("click", () => {
    if (screen.width <= 600) {
      notesContainer?.classList.add("noteOpened");
      aside?.classList.add("collapsed");
    }
  });
});

collapseButton?.addEventListener("click", () => {
  if (notesContainer?.classList.contains("noteOpened")) {
    notesContainer?.classList.remove("noteOpened");
    aside?.classList.remove("collapsed");
  }
});
