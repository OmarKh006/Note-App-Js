import { fetchData } from "./fetchData.js";
import { saveToDB } from "./saveToDB.js";

export const addNote = ({ title, author, value, date, pinned = false }) => {
  const notes = fetchData("notes") || [];
  const note = {
    title,
    author,
    value,
    date,
    pinned,
  };

  notes.push(note);
  saveToDB("notes", notes);
};
