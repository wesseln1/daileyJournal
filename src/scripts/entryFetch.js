import entryFactory from "./journal.js";
import listener from "../scripts/logEntry.js";

const url = 'http://localhost:3000/journalEntries'

const entryFetchs = {
 getEntries(){
        fetch(url) // Fetch from the API
    .then(journalEntry => journalEntry.json())  // Parse as JSON
    // console.log("entries", entries)
    .then(parsedEntries => {
        // What should happen when we finally have the array?  
        for(let i = 0; i < parsedEntries.length; i++){
            entryFactory.makeEntry(parsedEntries[i]);
        }
    }).then(
        listener.addEntry()
    )
},

saveEntry(entry){
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "Application"
        }, 
        body: JSON.stringify(entry)
    })
        .then(entry => entry.json())
        .then(parsedEntry => parsedEntry)
}
}
export default entryFetchs;