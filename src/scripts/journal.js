const domInj = document.querySelector(".flex-container");

const makeEntry = (entry) => {
    return `
    <div class="journalEntries">
        <div class="entryDiv card">
        <div class="card-body">
            <h2 class="entryHead">Date: ${entry.date}</h2>
            <h3 class="entryText">Concept Covered: ${entry.concept}</h3>
            <h3 class="entryText">Mood: ${entry.mood}</h3>
            <p class="entryText">Entry: ${entry.entry}</p>
            </div>
        </div>
    </div>
    `
}

fetch('http://localhost:8088/journalEntries') // Fetch from the API
    .then(journalEntry => journalEntry.json())  // Parse as JSON
    // console.log("entries", entries)
    .then(parsedEntries => {
        // What should happen when we finally have the array?  
        for(let i = 0; i < parsedEntries.length; i++){
            domInj.innerHTML += makeEntry(parsedEntries[i]);
        }
    })
    