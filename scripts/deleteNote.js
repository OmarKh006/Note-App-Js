import { fetchData } from "./fetchData";
import { saveToDB } from "./saveToDB";

export const deleteNote = (index) => {
  if (!confirm("Are you sure ??")) return;

  const notes = fetchData("notes");

  notes.splice(index, 1);

  saveToDB("notes", notes);
};
