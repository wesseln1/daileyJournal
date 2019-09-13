import htmlBuilder from "../scripts/htmlBuilder.js"

const entryFactory = {
    makeEntry(entry){
        let domInj2 = document.querySelector(".flexContainer2")
       
        let allEntriesDiv = htmlBuilder.createElementWithText("div", undefined, undefined, "journalEntries")
        let mainEntryDiv = htmlBuilder.createElementWithText("div", undefined, undefined, "entryDiv")
        let cardBodyDiv = htmlBuilder.createElementWithText("div", undefined, undefined, "card-body")
        let entryDate = htmlBuilder.createElementWithText("h2", `Date: ${entry.date}`, undefined, "entryHead")
        let entryTextConcpet = htmlBuilder.createElementWithText("h3", `Concept Covered: ${entry.concept}`, undefined, "entryText")
        let entryTextMood = htmlBuilder.createElementWithText("h3", `Mood: ${entry.mood}`, undefined, "entryText")
        let entryTextEntry = htmlBuilder.createElementWithText("p", `Entry: ${entry.entry}`, undefined, "entryText")

        domInj2.appendChild(allEntriesDiv)
        allEntriesDiv.appendChild(mainEntryDiv)
        mainEntryDiv.appendChild(cardBodyDiv)
        cardBodyDiv.appendChild(entryDate)    
        cardBodyDiv.appendChild(entryTextConcpet)    
        cardBodyDiv.appendChild(entryTextMood)    
        cardBodyDiv.appendChild(entryTextEntry)    
        
    }
}

export default entryFactory;