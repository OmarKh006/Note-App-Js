import { deleteNote } from "./deleteNote.js";
import {
  aside,
  deleteButtons,
  notesContainer,
  notesElements,
} from "./elements.js";
import { fetchData } from "./fetchData.js";
import { renderNotes } from "./renderNotes.js";
import { renderSelectedNote } from "./renderSelectedNote.js";
import { setViewedPage } from "./setViewedPage.js";

export const renderEventListeners = () => {
  notesElements().forEach((note, idx) => {
    note?.addEventListener("click", (clickedNote) => {
      notesElements().forEach((n) => {
        n.classList.remove("selected");
      });
      clickedNote.currentTarget.classList.add("selected");

      const note = fetchData("notes");

      if (clickedNote.currentTarget.classList.contains("pinned")) {
        const pinnedNotes = note.filter((note) => note.pinned == true);
        renderSelectedNote(pinnedNotes[pinnedNotes.length - 1]);
        return;
      }

      renderSelectedNote(note[idx - 1]);
    });
  });

  deleteButtons().forEach((button, idx) => {
    button?.addEventListener("click", () => {
      deleteNote(idx - 1);
      if (fetchData("notes").length) {
        renderNotes();
        renderSelectedNote();
        return;
      } else {
        setViewedPage("note");
      }
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
