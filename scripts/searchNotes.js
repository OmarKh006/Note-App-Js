import { fetchData } from "./fetchData.js";
import { renderNotes } from "./renderNotes.js";

export const searchNotes = (query) => {
  const notes = fetchData("notes") || [];
  const pinnedNotes = fetchData("pinnedNotes") || [];

  const filteredNotes = notes.filter((note) => note.value.includes(query));
  const filteredPinnedNotes = pinnedNotes.filter((note) =>
    note.value.includes(query),
  );

  renderNotes({
    regularSearch: filteredNotes,
    pinnedSearch: filteredPinnedNotes,
  });
};
