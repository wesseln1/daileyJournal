import entryFactory from "./journal.js";
import entryFetchs from "./entryFetch.js";

const journalEntry = [];
const listener = {
  addEntry() {
    document.addEventListener("click", event => {
      const dateInput = document.querySelector("#date-input").value;
      const conceptInput = document.querySelector("#concept-input").value;
      const journalInput = document.querySelector("#entry-input").value;
      const moodInput = document.querySelector("#mood-select").value;

      if (event.target.id === "entry-btn") {
        console.log(dateInput);

        const buildEntry = {
          date: dateInput,
          concept: conceptInput,
          entry: journalInput,
          mood: moodInput
        };

        // console.log("built", buildEntry)
        journalEntry.push(buildEntry);
        entryFactory.makeEntry(buildEntry);
        console.log("here before");
        entryFetchs.saveEntry(buildEntry).then(entry => console.log(entry));
        console.log("here after");
      } else if (event.target.classList.value === "editTaskButton") {
        console.log("looking");
      }
    });
  }
};
export default listener;
