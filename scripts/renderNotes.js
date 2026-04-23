import { noteList } from "./elements.js";
import { fetchData } from "./fetchData.js";
import { renderEventListeners } from "./renderEventListeners.js";

export const renderNotes = () => {
  const notes = fetchData("notes");
  let newNoteList = "";

  notes.forEach((note) => {
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
  });

  noteList.innerHTML = newNoteList;
  renderEventListeners();
};
