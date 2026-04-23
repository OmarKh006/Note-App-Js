import { fetchData } from "./fetchData.js";
import { saveToDB } from "./saveToDB.js";

export const addNote = ({ title, author, value, date, pinned = false }) => {
  const regularNotesArray = fetchData("notes") || [];
  const pinnedNotesArray = fetchData("pinnedNotes") || [];

  const note = {
    title,
    author,
    value,
    date,
    pinned,
  };

  if (pinned === true) {
    pinnedNotesArray.push(note);
    saveToDB("pinnedNotes", pinnedNotesArray);
  } else {
    regularNotesArray.push(note);
    saveToDB("notes", regularNotesArray);
  }
};
