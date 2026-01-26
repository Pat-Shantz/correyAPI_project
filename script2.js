// Fetch Futurama characters and populate the ordered list
const list = document.getElementById("character-list");
const headshot = document.getElementById("headshot");

fetch("https://api.sampleapis.com/futurama/characters")
    //fetches the api
  .then((response) => response.json())
  //response.json() -> converts the response body to a Javascript object/array
  .then((characters) => {
    console.log(characters)
  //.then((characters) ... receives the parsed JSON data (an array) - and then parses (turns) it into a JavaScript Array (called 'characters') - (im defining an anonymous function)
    characters.forEach((character) => {
      // Your code goes here to render each character name in the ol#character-list element
      const characterNameListItem = document.createElement("li");
      characterNameListItem.textContent = character.name.first;
      
      // And to also add a click handler so that the img#headshot element gets populated with the character's
      // image from the API
    });
  })
  .catch((error) => console.error("Error fetching characters:", error));