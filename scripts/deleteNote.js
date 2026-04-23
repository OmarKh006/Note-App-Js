import { fetchData } from "./fetchData";
import { saveToDB } from "./saveToDB";

export const deleteNote = (index, key) => {
  if (!confirm("Are you sure ??")) return;

  if (key === "notes") {
    const notes = fetchData(key) || [];
    if (notes.length) {
      notes.splice(index, 1);
      saveToDB("notes", notes);
    }
  } else if (key === "pinnedNotes") {
    const pinnedNotes = fetchData(key) || [];
    if (pinnedNotes.length) {
      pinnedNotes.splice(index, 1);
      saveToDB("notes", pinnedNotes);
    }
  }
};
