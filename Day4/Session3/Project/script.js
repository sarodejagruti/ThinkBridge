 document.addEventListener('DOMContentLoaded', (event) => {
            console.log('DOM is fully loaded and parsed');

            // 1. Get a reference to an element by its ID
            const button = document.getElementById('myButton');
            const messageParagraph = document.getElementById('message');
            const outputDiv = document.getElementById('output');

            // 2. Add an event listener to the button
            button.addEventListener('click', () => {
                console.log('Button was clicked!');

                // 3. Manipulate an existing element
                // Change the text content of the message paragraph
                messageParagraph.textContent = "The DOM has been successfully manipulated!";
                
                // Change the color of the text
                messageParagraph.style.color = "#DC3545";
                
                // Change the font style
                messageParagraph.style.fontStyle = "italic";

                // 4. Create a new element and add it to the page
                const newParagraph = document.createElement('p');
                newParagraph.textContent = "This is a new element created with JavaScript.";
                newParagraph.classList.add('new-element');
                
                // Append the new element to the output div
                outputDiv.appendChild(newParagraph);
            });
        });
