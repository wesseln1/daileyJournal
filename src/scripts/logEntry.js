const button = document.querySelector(".entryButton")

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
    domInj.innerHTML += makeEntry(buildEntry)
    console.log("you made a new entry")
})
