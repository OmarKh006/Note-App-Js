import { notesElements } from "./elements.js";

export const renderEventListeners = () => {
  notesElements().forEach((note) => {
    note?.addEventListener("click", (clickedNote) => {
      notesElements().forEach((n) => {
        n.classList.remove("selected");
      });
      clickedNote.currentTarget.classList.add("selected");
    });
  });
};
