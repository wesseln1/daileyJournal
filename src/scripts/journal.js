import htmlBuilder from "../scripts/htmlBuilder.js"

const entryFactory = {
    makeEntry(entry){
        let domInj = document.querySelector(".flexContainer")
       
        let allEntriesDiv = htmlBuilder.createElementWithText("div", undefined, undefined, "journalEntries")
        let mainEntryDiv = htmlBuilder.createElementWithText("div", undefined, undefined, "entryDiv")
        let cardBodyDiv = htmlBuilder.createElementWithText("div", undefined, undefined, "card-body")
        let entryDate = htmlBuilder.createElementWithText("h2", `Date: ${entry.date}`, undefined, "entryHead")
        let entryTextConcpet = htmlBuilder.createElementWithText("h3", `Concept Covered: ${entry.concept}`, undefined, "entryText")
        let entryTextMood = htmlBuilder.createElementWithText("h3", `Mood: ${entry.mood}`, undefined, "entryText")
        let entryTextEntry = htmlBuilder.createElementWithText("p", `Mood: ${entry.entry}`, undefined, "entryText")

        domInj.appendChild(allEntriesDiv)
        allEntriesDiv.appendChild(mainEntryDiv)
        mainEntryDiv.appendChild(cardBodyDiv)
        cardBodyDiv.appendChild(entryDate)    
        cardBodyDiv.appendChild(entryTextConcpet)    
        cardBodyDiv.appendChild(entryTextMood)    
        cardBodyDiv.appendChild(entryTextEntry)    
        
    }
}

export default entryFactory;