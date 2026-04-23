import { fetchData } from "./fetchData.js";
import { renderNotes } from "./renderNotes.js";
import { setViewedPage } from "./setViewedPage.js";

export const onStartUp = () => {
  if (fetchData("notes").length) {
    renderNotes();
    setViewedPage("home");
    return;
  }
  setViewedPage("note");
};
