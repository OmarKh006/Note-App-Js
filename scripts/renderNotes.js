import { noteList, pinnedNoteContainer } from "./elements.js";
import { fetchData } from "./fetchData.js";
import { renderEventListeners } from "./renderEventListeners.js";

export const renderNotes = () => {
  const notes = fetchData("notes");

  const pinnedNotes = notes.filter((note) => note.pinned == true);
  let newNoteList = "";

  notes.forEach((note) => {
    if (!note.pinned) {
      newNoteList += `
    <li class="sideBar__note">
        <h3 class="sideBar__noteTitle">${note.title}</h3>
        <p class="sideBar__noteText">${note.value}</p>
        <div class="sideBar__noteInfo">
            <span class="sideBar__noteDate">${note.date}</span>
            <button
                type="button"
                class="sideBar__noteButton"
                id="deleteNote"
            >
                Delete
            </button>
        </div>
    </li>
            `;
    }
  });

  if (pinnedNotes.length) {
    pinnedNoteContainer.innerHTML = `
      <h3 class="sideBar__noteTitle">${pinnedNotes[pinnedNotes.length - 1].title}</h3>
      <p class="sideBar__noteText">${pinnedNotes[pinnedNotes.length - 1].value}</p>
      <div class="sideBar__noteInfo">
          <span class="sideBar__noteDate">${pinnedNotes[pinnedNotes.length - 1].date}</span>
          <button
              type="button"
              class="sideBar__noteButton"
              id="deleteNote"
          >
              Delete
          </button>
      </div>
    `;
  }
  noteList.innerHTML = newNoteList;
  renderEventListeners();
};
