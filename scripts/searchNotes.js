import { fetchData } from "./fetchData.js";
import { renderNotes } from "./renderNotes.js";

export const searchNotes = (query) => {
  const notes = fetchData("notes");
  const filteredNotes = notes.filter((note) => note.value.includes(query));
  renderNotes(filteredNotes);
};
