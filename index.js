const navigationButtons = document.querySelectorAll(".header__btn");
const homePage = document.querySelector("#home-page");
const addNotePage = document.querySelector("#add-note-page");
const notesElements = document.querySelectorAll(".sideBar__note");

const setViewedPage = (page) => {
  if (page === "home") {
    homePage.style.display = "flex";
    addNotePage.style.display = "none";
  } else if (page === "note") {
    homePage.style.display = "none";
    addNotePage.style.display = "block";
  }
};

navigationButtons.forEach((button) => {
  button.addEventListener("click", (clicked) => {
    navigationButtons.forEach((b) => {
      b.removeAttribute("aria-current");
    });
    clicked.currentTarget.setAttribute("aria-current", "page");
    if (clicked.currentTarget.dataset.page === "home") setViewedPage("home");
    else if (clicked.currentTarget.dataset.page === "note")
      setViewedPage("note");
  });
});

notesElements.forEach((note) => {
  note.addEventListener("click", (clickedNote) => {
    notesElements.forEach((n) => {
      n.classList.remove("selected");
    });
    clickedNote.currentTarget.classList.add("selected");
  });
});
