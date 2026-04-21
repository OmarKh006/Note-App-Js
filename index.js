const navigationButtons = document.querySelectorAll(".header__btn");
const homePage = document.querySelector("#home-page");
const addNotePage = document.querySelector("#add-note-page");
const notesElements = document.querySelectorAll(".sideBar__note");
const goToAddNoteBtn = document.querySelector(".selectedNote__icon-button");
const homeBtn = document.querySelector("#homeBtn");
const noteBtn = document.querySelector("#noteBtn");
const collapseButton = document.querySelector(".sideBar__collapseButton");
const aside = document.querySelector(".sideBar");
const selectedNote = document.querySelector(".selectedNote");

const setViewedPage = (page) => {
  if (page === "home") {
    homePage.style.display = "flex";
    addNotePage.style.display = "none";
  } else if (page === "note") {
    homePage.style.display = "none";
    addNotePage.style.display = "block";
  }
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
  noteBtn.setAttribute("aria-current", "page");
  homeBtn.removeAttribute("aria-current");
});

collapseButton?.addEventListener("click", () => {
  aside?.classList.toggle("collapsed");
});
