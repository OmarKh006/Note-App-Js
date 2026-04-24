import { deleteNote } from "./deleteNote.js";
import {
  aside,
  deleteButtons,
  deletePinnedButtons,
  notesContainer,
  notesElements,
  pinnedNotesElements,
} from "./elements.js";
import { fetchData } from "./fetchData.js";
import { renderNotes } from "./renderNotes.js";
import { renderSelectedNote } from "./renderSelectedNote.js";
import { setViewedPage } from "./setViewedPage.js";

export const renderEventListeners = () => {
  notesElements().forEach((note, idx) => {
    note?.addEventListener("click", (clickedNote) => {
      notesElements().forEach((n) => n.classList.remove("selected"));
      pinnedNotesElements().forEach((n) => n.classList.remove("selected"));

      clickedNote.currentTarget.classList.add("selected");

      const regularNotes = fetchData("notes");
      renderSelectedNote(regularNotes[idx]);
    });
  });

  pinnedNotesElements().forEach((note, idx) => {
    note?.addEventListener("click", (clickedNote) => {
      notesElements().forEach((n) => n.classList.remove("selected"));
      pinnedNotesElements().forEach((n) => n.classList.remove("selected"));

      clickedNote.currentTarget.classList.add("selected");

      const pinnedNotes = fetchData("pinnedNotes");
      renderSelectedNote(pinnedNotes[idx]);
    });
  });

  deleteButtons().forEach((button, idx) => {
    button?.addEventListener("click", () => {
      if (button.dataset.index) {
        deleteNote(Number.parseInt(button.dataset.index), "notes");
      } else {
        deleteNote(idx, "notes");
      }
      const regularNotes = fetchData("notes") || [];
      const pinnedNotes = fetchData("pinnedNotes") || [];
      if (regularNotes.length || pinnedNotes.length) {
        renderNotes();
        return;
      } else {
        renderNotes();
        setViewedPage("note");
      }
    });
  });

  deletePinnedButtons().forEach((button, idx) => {
    button?.addEventListener("click", () => {
      if (button.dataset.index) {
        deleteNote(Number.parseInt(button.dataset.index), "pinnedNotes");
      } else {
        deleteNote(idx, "pinnedNotes");
      }
      const regularNotes = fetchData("notes") || [];
      const pinnedNotes = fetchData("pinnedNotes") || [];
      if (regularNotes.length || pinnedNotes.length) {
        renderNotes();
        return;
      } else {
        renderNotes();
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
