const dateInput = document.querySelector("#dateInput")
const conceptInput = document.querySelector("#conceptInput")
const journalInput = document.querySelector("#journalInput")
const moodInput = document.querySelector("#moodInput")
const button = document.querySelector(".entryButton")


const buildEntry = () => {
    let builtEntry = {
        date: dateInput.value,
        concept: conceptInput.value,
        entry: journalInput.value,
        mood: moodInput.value,
    }
}
    // return `
    // <div class="journalEntries">
    //     <div class="entryDiv">
    //         <h2 class="entryHead">Date: ${date.value}</h2>
    //         <h3 class="entryText">Concept Covered: ${concept.value}</h3>
    //         <h3 class="entryText">Mood: ${mood.value}</h3>
    //         <p class="entryText">Entry: ${thisEntry.value}</p>
    //     </div>
    // </div>
    // `

button.onClick = function domInj(){
    buildEntry(buildEntry);
    console.log("you made a new entry")
}