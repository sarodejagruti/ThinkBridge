# DOM and Events – Notes

## What is the DOM?
- **DOM (Document Object Model)** is a programming interface for web documents.
- It represents the page structure as a tree of nodes (elements, text, attributes).
- JavaScript can use the DOM to access, modify, add, or delete elements dynamically.

---

## Selecting Elements
JavaScript provides different methods to **select elements**:
- `document.getElementById("id")` → selects a single element by its `id`.
- `document.querySelector("selector")` → selects the first element matching a CSS selector.
- `document.querySelectorAll("selector")` → selects all elements matching a CSS selector (returns a NodeList).

**Example in our project:**
```js
const button = document.getElementById("myButton");
const messageParagraph = document.getElementById("message");
const outputDiv = document.getElementById("output");

Listening to Events

Events are actions that happen in the browser (e.g., clicks, key presses, page load).
We can listen for events using addEventListener.

Syntax:

element.addEventListener("event", callbackFunction);


Example in our project:

button.addEventListener("click", () => {
  console.log("Button was clicked!");
});

Updating Text and Styles

We can change existing elements dynamically:

element.textContent = "New text" → updates text inside the element.

element.style.property = "value" → updates inline CSS styles.

element.classList.add("className") → adds a CSS class.

Example in our project:

messageParagraph.textContent = "The DOM has been successfully manipulated!";
messageParagraph.style.color = "#DC3545";
messageParagraph.style.fontStyle = "italic";

Creating and Appending Elements

We can also create new elements and insert them into the DOM:

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new element created with JavaScript.";
newParagraph.classList.add("new-element");
outputDiv.appendChild(newParagraph);

Key Keywords / Functions Used

document.addEventListener("DOMContentLoaded") → ensures the DOM is fully loaded before running JS.

getElementById → selects an element by its unique id.

addEventListener → attaches an event handler.

textContent → sets or gets the text inside an element.

style → modifies inline CSS properties.

classList.add → adds a CSS class to an element.

createElement → creates a new HTML element.

appendChild → adds a new child element to the DOM.