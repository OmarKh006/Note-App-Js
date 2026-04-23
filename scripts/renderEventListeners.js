// import { deleteNote } from "./deleteNote.js";
import {
  aside,
  notesContainer,
  notesElements,
  pinnedNotesElements,
} from "./elements.js";
import { fetchData } from "./fetchData.js";
// import { renderNotes } from "./renderNotes.js";
import { renderSelectedNote } from "./renderSelectedNote.js";
// import { setViewedPage } from "./setViewedPage.js";

export const renderEventListeners = () => {
  notesElements().forEach((note, idx) => {
    note?.addEventListener("click", (clickedNote) => {
      notesElements().forEach((n) => {
        n.classList.remove("selected");
      });
      clickedNote.currentTarget.classList.add("selected");

      const regularNotes = fetchData("notes");
      renderSelectedNote(regularNotes[idx]);
    });
  });

  pinnedNotesElements().forEach((note, idx) => {
    note?.addEventListener("click", (clickedNote) => {
      pinnedNotesElements().forEach((n) => {
        n.classList.remove("selected");
      });
      clickedNote.currentTarget.classList.add("selected");

      const pinnedNotes = fetchData("pinnedNotes");
      renderSelectedNote(pinnedNotes[idx]);
    });
  });

  // deleteButtons().forEach((button, idx) => {
  //   button?.addEventListener("click", () => {
  //     deleteNote(idx);
  //     if (fetchData("notes").length || fetchData("pinnedNotes").length) {
  //       renderNotes();
  //       renderSelectedNote();
  //       return;
  //     } else {
  //       renderNotes();
  //       setViewedPage("note");
  //     }
  //   });
  // });

  notesElements().forEach((note) => {
    note?.addEventListener("click", () => {
      if (screen.width <= 600) {
        notesContainer?.classList.add("noteOpened");
        aside?.classList.add("collapsed");
      }
    });
  });
};
