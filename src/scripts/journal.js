const journalEntry = [ 
{
    date: "08-20-19",
    concept: "css selectors",
    entry: "Learne how to use flexbox, and how to move items and content around with it. (Still shaddy on it)",
    mood: "confused"
},
{
    date: "08-21-19",
    concept: "group project",
    entry: "Working on tribute project, laying out html and planning website out.",
    mood: "Happy"
},
{
    date: "08-22-19",
    concept: "wrapping up projects",
    entry: "Finished HTML layout, and started styling. Still confused on flexbox. Getting better at it.",
    mood: "Happy"
},
{
    date: "08-23-19",
    concept: "demenstration day",
    entry: "finaly got flexbox down. Saw a lot of cool ideas in classmates websites.",
    mood: "Happy"
}
]
const domInj = document.querySelector(".flex-container");

const makeEntry = (entry) => {
    return `
    <div class="journalEntries">
        <div class="entryDiv">
            <h2 class="entryHead">Date: ${entry.date}</h2>
            <h3 class="entryText">Concept Covered: ${entry.concept}</h3>
            <h3 class="entryText">Mood: ${entry.mood}</h3>
            <p class="entryText">Entry: ${entry.entry}</p>
        </div>
    </div>
    `
}

for(let i = 0; i < journalEntry.length; i++){
    domInj.innerHTML += makeEntry(journalEntry[i]);
}