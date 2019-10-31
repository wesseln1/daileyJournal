//Page contains an object with three different functions to build Html, clear a container, and create list element
const htmlBuilder = {
  //Function to build and return an element taking in element, text, and id as arguments.
  createElementWithText(element, text, id, className, elementValue, type) {
    const newElement = document.createElement(element);
    if (text) {
      newElement.textContent = text;
    }

    if (id) {
      newElement.id = id;
    }
    if (className) {
      newElement.classList.add(className);
    }
    if (elementValue) {
      newElement.setAttribute("value", elementValue);
    }
    if (type) {
      newElement.setAttribute("type", type);
    }
    if (type) {
      newElement.setAttribute("type", type);
    }
    return newElement;
  },

  // Function to clear the contents of the element which is passed as an argument.
  clearContainer(elementToClear) {
    while (elementToClear.firstChild) {
      elementToClear.removeChild(elementToClear.firstChild);
    }
  },
  //Function to build and return list element with anchor and href
  createAnchorElement(element, text, className, elementValue, buttonId) {
    // const newListElement = document.createElement("li")
    const newAnchorElement = document.createElement(element);
    if (text) {
      newAnchorElement.textContent = text;
    }

    if (className) {
      newAnchorElement.classList.add(className);
    }

    if (elementValue) {
      newAnchorElement.setAttribute("href", "#");
    }

    if (buttonId) {
      newAnchorElement.id = buttonId;
    }

    newAnchorElement.textContent = text;
    newAnchorElement.classList.add(className);
    newAnchorElement.id = buttonId;
    //newListElement.appendChild(newAnchorElement)

    return newAnchorElement;
  }
};

export default htmlBuilder;
