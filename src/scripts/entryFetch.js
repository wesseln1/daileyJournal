import entryFactory from "./journal.js";
import listener from "../scripts/logEntry.js";

const domInj = document.querySelector("#flex-container");

const entryFetch = {
 getEntries(){
        fetch('http://localhost:3000/journalEntries') // Fetch from the API
    .then(journalEntry => journalEntry.json())  // Parse as JSON
    // console.log("entries", entries)
    .then(parsedEntries => {
        // What should happen when we finally have the array?  
        for(let i = 0; i < parsedEntries.length; i++){
            entryFactory.makeEntry(parsedEntries[i]);
        }
        listener.addEntry()
    })
}
}
export default entryFetch;