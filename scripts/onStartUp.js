import { fetchData } from "./fetchData.js";
import { renderNotes } from "./renderNotes.js";
import { setViewedPage } from "./setViewedPage.js";

export const onStartUp = () => {
  const notes = fetchData("notes") || [];
  const pinnedNotes = fetchData("pinnedNotes") || [];

  if (notes.length || pinnedNotes.length) {
    renderNotes();
    setViewedPage("home");
    return;
  }
  setViewedPage("note");
};
