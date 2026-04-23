import { noteList, pinnedNoteContainer } from "./elements.js";
import { fetchData } from "./fetchData.js";
import { renderEventListeners } from "./renderEventListeners.js";

export const renderNotes = ({
  regularSearch = undefined,
  pinnedSearch = undefined,
} = {}) => {
  let newNoteList = "";
  let newPinnedNoteList = "";

  if (!regularSearch && !pinnedSearch) {
    const regularNotes = fetchData("notes") || [];
    const pinnedNotes = fetchData("pinnedNotes") || [];

    if (regularNotes && regularNotes.length) {
      regularNotes.forEach((note) => {
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
    } else {
      noteList.innerHTML = ``;
    }

    if (pinnedNotes.length) {
      pinnedNotes.forEach((pinned) => {
        newPinnedNoteList += `
        <li class="sideBar__note pinnedNote">
          <h3 class="sideBar__noteTitle">${pinned.title}</h3>
          <p class="sideBar__noteText">${pinned.value}</p>
          <div class="sideBar__noteInfo pBtn">
            <span class="sideBar__noteDate">${pinned.date}</span>
            <button
                type="button"
                class="sideBar__noteButton deletePinnedNote"
                id="deleteNote"
            >
                Delete
            </button>
          </div>
        </li>
    `;
      });
      pinnedNoteContainer.innerHTML = newPinnedNoteList;
    } else {
      pinnedNoteContainer.innerHTML = ``;
    }

    renderEventListeners();
  } else {
    if (regularSearch && regularSearch.length) {
      regularSearch.forEach((regular) => {
        newNoteList += `
            <li class="sideBar__note">
              <h3 class="sideBar__noteTitle">${regular.title}</h3>
              <p class="sideBar__noteText">${regular.value}</p>
              <div class="sideBar__noteInfo">
                  <span class="sideBar__noteDate">${regular.date}</span>
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
    }
    if (pinnedSearch && pinnedSearch.length) {
      pinnedSearch.forEach((pinned) => {
        newPinnedNoteList += `
        <li class="sideBar__note pinnedNote">
          <h3 class="sideBar__noteTitle">${pinned.title}</h3>
          <p class="sideBar__noteText">${pinned.value}</p>
          <div class="sideBar__noteInfo pBtn">
            <span class="sideBar__noteDate">${pinned.date}</span>
            <button
                type="button"
                class="sideBar__noteButton deletePinnedNote"
                id="deleteNote"
            >
                Delete
            </button>
          </div>
        </li>
    `;
      });
      pinnedNoteContainer.innerHTML = newPinnedNoteList;
      renderEventListeners();
    }
  }
};
