import htmlBuilder from "./htmlBuilder.js"
import entryFetchs from "../scripts/entryFetch.js";
 let injDiv = document.querySelector(".injDiv");

const mainPageHTML = {

     buildMyForm: () => {

        // making main flex div and opening header
        let flexContainer = htmlBuilder.createElementWithText("div", undefined, "flex-container", "flexContainer");
        let flexContainer2 = htmlBuilder.createElementWithText("div", undefined, undefined, "flexContainer2");
        let h1Div = htmlBuilder.createElementWithText("div")
        let h1 = htmlBuilder.createElementWithText("h1", "Journal Entry", undefined, "text-in-focus")
        
        // making the journal entry form on the main page
        let formDiv = htmlBuilder.createElementWithText("div", undefined, "formDiv" )
        let form = htmlBuilder.createElementWithText("form")
        
        // created four main fieldsets to create journal entries
        let dateFieldset = htmlBuilder.createElementWithText("fieldset")
        let conceptFieldset = htmlBuilder.createElementWithText("fieldset")
        let entryFieldset = htmlBuilder.createElementWithText("fieldset")
        let moodFieldset = htmlBuilder.createElementWithText("fieldset")
        
        // creating labels for input fields
        let dateLabel = htmlBuilder.createElementWithText("label", "Date of Entry", "date-label", "dateLabel")
        let conceptLabel = htmlBuilder.createElementWithText("label", "Concepts Covered", "concept-lebel", "conceptLabel")
     let entryLabel = htmlBuilder.createElementWithText("label", "Journal Entry", "entry-label", "entryLabel")
     let moodLabel = htmlBuilder.createElementWithText("label", "Mood", "mood-label", "moodLabel")
     
     // creating input fields for main form
     let dateInput = htmlBuilder.createElementWithText("input", undefined, "date-input", "dateInput", undefined, "date")
     let conceptInput = htmlBuilder.createElementWithText("input", undefined, "concept-input", "conceptInput", undefined, "text")
     let entryInput = htmlBuilder.createElementWithText("input", undefined, "entry-input", "entryInput", undefined, "text")
     let moodSelect = htmlBuilder.createElementWithText("select", undefined, "mood-celect", "btn", undefined)
     
     // adding options for the select dropdown menu for moods
     let moodOption = htmlBuilder.createElementWithText("option", "How do you feel?", undefined, undefined, "")
     let moodOption1 = htmlBuilder.createElementWithText("option", "Happy", undefined, undefined, "Happy")
     let moodOption2 = htmlBuilder.createElementWithText("option", "Exstaticed", undefined, undefined, "Exstaticed")
     let moodOption3 = htmlBuilder.createElementWithText("option", "Sad", undefined, undefined, "Sad")
     let moodOption4 = htmlBuilder.createElementWithText("option", "Satisfied", undefined, undefined, "Satisfied")
     let moodOption5 = htmlBuilder.createElementWithText("option", "Grumpy", undefined, undefined, "Grumpy")
     let moodOption6 = htmlBuilder.createElementWithText("option", "Hangrey", undefined, undefined, "Hangrey")
     let moodOption7 = htmlBuilder.createElementWithText("option", "Sleepy", undefined, undefined, "Sleepy")
     let moodOption8 = htmlBuilder.createElementWithText("option", "Pissed Off", undefined, undefined, "Pissed Off")
     
    // creating save button for making entrys
    let saveButtonDiv = htmlBuilder.createElementWithText("div")
    let saveEntryButton = htmlBuilder.createElementWithText("button", "Record Entry", "entry-btn", "entryButton")
    
    // injecting flex containers
    injDiv.appendChild(flexContainer)
    injDiv.appendChild(flexContainer2)
    
    // injecting main header
    flexContainer.appendChild(h1Div)
    h1Div.appendChild(h1)
    
    // inserting main form
    flexContainer.appendChild(formDiv)
    formDiv.appendChild(form)
    
    // inserting fieldsets into form
    form.appendChild(dateFieldset)
    form.appendChild(conceptFieldset)
    form.appendChild(entryFieldset)
    form.appendChild(moodFieldset)
    
    // inserting labels into fieldsets
    dateFieldset.appendChild(dateLabel)
    conceptFieldset.appendChild(conceptLabel)
    entryFieldset.appendChild(entryLabel)
    moodFieldset.appendChild(moodLabel)
    
    // inserting inputs into fieldsets
    dateFieldset.appendChild(dateInput)
    conceptFieldset.appendChild(conceptInput)
    entryFieldset.appendChild(entryInput)
    moodFieldset.appendChild(moodSelect)
    
    // appending options onto parent select element
    moodSelect.appendChild(moodOption)
    moodSelect.appendChild(moodOption1)
    moodSelect.appendChild(moodOption2)
    moodSelect.appendChild(moodOption3)
    moodSelect.appendChild(moodOption4)
    moodSelect.appendChild(moodOption5)
    moodSelect.appendChild(moodOption6)
    moodSelect.appendChild(moodOption7)
    moodSelect.appendChild(moodOption8)
    
    // appending the journal entry save button to the form
    form.appendChild(saveButtonDiv)
    saveButtonDiv.appendChild(saveEntryButton)
    entryFetchs.getEntries()
}
}
export default mainPageHTML