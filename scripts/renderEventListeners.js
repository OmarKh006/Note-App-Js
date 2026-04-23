import { aside, notesContainer, notesElements } from "./elements.js";
import { fetchData } from "./fetchData.js";
import { renderSelectedNote } from "./renderSelectedNote.js";

export const renderEventListeners = () => {
  notesElements().forEach((note, idx) => {
    note?.addEventListener("click", (clickedNote) => {
      notesElements().forEach((n) => {
        n.classList.remove("selected");
      });
      clickedNote.currentTarget.classList.add("selected");
      const note = fetchData("notes");
      renderSelectedNote(note[idx - 1]);
    });
  });

  notesElements().forEach((note) => {
    note?.addEventListener("click", () => {
      if (screen.width <= 600) {
        notesContainer?.classList.add("noteOpened");
        aside?.classList.add("collapsed");
      }
    });
  });
};
