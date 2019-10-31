import entryFactory from "./journal.js";
import listener from "../scripts/logEntry.js";

let url = "http://localhost:8088/journalEntries";

const entryFetchs = {
  getEntries() {
    return fetch(url) // Fetch from the API
      .then(journalEntry => journalEntry.json()) // Parse as JSON
      .then(parsedEntries => {
        // What should happen when we finally have the array? nw -Did i put this comment here?
        for (let i = 0; i < parsedEntries.length; i++) {
          entryFactory.makeEntry(parsedEntries[i]);
        }
      })
      .then(listener.addEntry());
  },
  saveEntry(entry) {
    console.log("here", entry);
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application"
      },
      body: JSON.stringify(entry)
    })
      .then(entry => console.log(entry.json()))
      .then(parsedEntry => parsedEntry);
  }
  // editEntry(entry) {
  //   fetch(url, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "Application"
  //     },
  //     body: JSON.stringify(entry)
  //   })
  //     .then(entry => entry.json())
  //     .then(parsedEntry => parsedEntry);
  // }
};
export default entryFetchs;
