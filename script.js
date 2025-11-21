// Fetch Futurama characters and populate the ordered list
const list = document.getElementById("character-list");
const headshot = document.getElementById("headshot");

fetch("https://api.sampleapis.com/futurama/characters")
  .then((response) => response.json())
  //response.json() -> converts the response body to a Javascript object/array
  .then((characters) => {
  //.then((characters) ... receives the parsed JSON data (an array) - and then parses (turns) it into a JavaScript Array (called 'characters') - (im defining an anonymous function)
    characters.forEach((character) => {
      // Create a list item for each character
      const listItem = document.createElement("li");
      listItem.textContent = character.name.first;
      
      // Add click handler to display the character's headshot
      listItem.addEventListener("click", () => {
        headshot.src = character.images.main;
        headshot.alt = character.name.first;
      });
      
      // Add the list item to the ordered list
      list.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error fetching characters:", error));
