import { addNote } from "./addNote.js";
import {
  addNoteButton,
  addNotePage,
  addPinnedNoteButton,
  aside,
  authorInputField,
  burgerMenu,
  collapseButton,
  goToAddNoteBtn,
  headerSearchForm,
  homeBtn,
  mainHeader,
  navigationButtons,
  nonLaptopLogo,
  noteBtn,
  noteInputField,
  notes,
  notesContainer,
  notesElements,
  searchIconToggle,
  titleInputField,
} from "./elements.js";
import { setViewedPage } from "./setViewedPage.js";

const date = new Date();
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

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

addNoteButton?.addEventListener("click", (e) => {
  e.preventDefault();

  const title = titleInputField.value;
  const author = authorInputField.value;
  const note = noteInputField.value;
  const currentDate = date.toLocaleDateString("en-US", options);

  if (!title || !author || !note) {
    alert("Please fill in the missing field");
  }

  addNote({ title, author, value: note, date: currentDate });
  setViewedPage("note");
});

addPinnedNoteButton?.addEventListener("click", (e) => {
  e.preventDefault();

  const title = titleInputField.value;
  const author = authorInputField.value;
  const note = noteInputField.value;
  const currentDate = date.toLocaleDateString("en-US", options);

  if (!title || !author || !note) {
    alert("Please fill in the missing field");
  }

  addNote({ title, author, value: note, date: currentDate, pinned: true });
  setViewedPage("note");
});
