import entryFactory from "./journal.js"

const domInj = document.querySelector(".flexContainer2");
const button = document.querySelector(".entryButton")
const journalEntry = []
const listener = {

addEntry(){
    
    button.addEventListener("click", (event) => {
        const dateInput = document.querySelector("#dateInput")
        const conceptInput = document.querySelector("#conceptInput")
        const journalInput = document.querySelector("#journalInput")
        const moodInput = document.querySelector("#moodInput")
        
        
        const buildEntry = {
    date: dateInput.value,
    concept: conceptInput.value,
    entry: journalInput.value,
    mood: moodInput.value,
}

// console.log("built", buildEntry)
    journalEntry.push(buildEntry)
    let makeMyNewEntry = entryFactory.makeEntry(buildEntry)
    domInj.appendChild(makeMyNewEntry)
    console.log("you made a new entry")
})
}
}
export default listener;