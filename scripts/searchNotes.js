import { fetchData } from "./fetchData.js";
import { renderNotes } from "./renderNotes.js";

export const searchNotes = (query) => {
  const notes = fetchData("notes") || [];
  const pinnedNotes = fetchData("pinnedNotes") || [];

  const filteredRegularNotes = notes
    .map((value, index) => ({ value, index }))
    .filter((note) =>
      note.value.value.toLowerCase().includes(query.toLowerCase()),
    );

  const filteredPinnedNotes = pinnedNotes
    .map((value, index) => ({ value, index }))
    .filter((note) =>
      note.value.value.toLowerCase().includes(query.toLowerCase()),
    );

  renderNotes({
    regularSearch: filteredRegularNotes,
    pinnedSearch: filteredPinnedNotes,
  });
};
