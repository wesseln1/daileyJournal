import htmlBuilder from "../scripts/htmlBuilder.js";

const entryFactory = {
  makeEntry(entry) {
    let domInj2 = document.querySelector(".flexContainer2");
    let allEntriesDiv = htmlBuilder.createElementWithText(
      "div",
      undefined,
      undefined,
      "journalEntries"
    );
    let mainEntryDiv = htmlBuilder.createElementWithText(
      "div",
      undefined,
      undefined,
      "entryDiv"
    );
    let cardBodyDiv = htmlBuilder.createElementWithText(
      "div",
      undefined,
      undefined,
      "card-body"
    );
    let entryDate = htmlBuilder.createElementWithText(
      "h2",
      `Date: ${entry.date}`,
      undefined,
      "entryHead"
    );
    let entryTextConcpet = htmlBuilder.createElementWithText(
      "h3",
      `Concept Covered: ${entry.concept}`,
      undefined,
      "entryText"
    );
    let entryTextMood = htmlBuilder.createElementWithText(
      "h3",
      `Mood: ${entry.mood}`,
      undefined,
      "entryText"
    );
    let entryTextEntry = htmlBuilder.createElementWithText(
      "p",
      `Entry: ${entry.entry}`,
      undefined,
      "entryText"
    );
    let editButton = htmlBuilder.createElementWithText(
      "button",
      "Edit",
      "editEntryButton",
      `edit-${entry.id}`,
      undefined,
      "button"
    );
    let deleteButton = htmlBuilder.createElementWithText(
      "button",
      "Delete",
      "deleteEntryButton",
      `delete-${entry.id}`,
      undefined,
      "button"
    );

    domInj2.appendChild(allEntriesDiv);
    allEntriesDiv.appendChild(mainEntryDiv);
    mainEntryDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(entryDate);
    cardBodyDiv.appendChild(entryTextConcpet);
    cardBodyDiv.appendChild(entryTextMood);
    cardBodyDiv.appendChild(entryTextEntry);
    cardBodyDiv.appendChild(editButton);
    cardBodyDiv.appendChild(deleteButton);
  }
};

export default entryFactory;

function happyDiv(){
  return `
  <div class="happyEntries">
  </div>
  `
}
function sadDiv(){
  return `
  <div class="sadEntries">
  </div>
  `
}

function journalFilter (entries) {
  let entryLog = document.querySelector(".entryLog");
  let createEntry = createThing();
  (entryLog.innerHTML = ""),
    entries.ForEach(entry => {
      if (entry.mood === "happy") {
        entryLog.innerHTML += happyDiv();
        let happyDivDom = document.querySelector(".happyEntries");
        happyDivDom.innerHTML += createEntry;
      } else if(entry.mood === "sad"){
          entryLog.innerHTML += sadDiv();
          let sadDivDom = document.querySelector(".sadEntries");
          sadDivDom.innerHTML += createEntry;
      }
    });
};
