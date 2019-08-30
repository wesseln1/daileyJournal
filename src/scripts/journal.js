

const journalEntry = [ 
{
    date: "08-20-2019",
    concept: "css selectors",
    entry: "Learne how to use flexbox, and how to move items and content around with it. (Still shaddy on it)",
    mood: "confused"
},
{
    date: "08-21-2019",
    concept: "group project",
    entry: "Working on tribute project, laying out html and planning website out.",
    mood: "Happy"
},
{
    date: "08-22-2019",
    concept: "wrapping up projects",
    entry: "Finished HTML layout, and started styling. Still confused on flexbox. Getting better at it.",
    mood: "Happy"
},
{
    date: "08-23-2019",
    concept: "demenstration day",
    entry: "finaly got flexbox down. Saw a lot of cool ideas in classmates websites.",
    mood: "Happy"
}
]
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
    