// Fetch Futurama characters and populate the ordered list
const list = document.getElementById("character-list");
const headshot = document.getElementById("headshot");

fetch("https://api.sampleapis.com/futurama/characters")
  .then((response) => response.json())
  //response.json() -> converts the response body to a Javascript object/array
  .then((characters) => {
  //.then((characters) ... receives the parsed JSON data (the character array)
    characters.forEach((character) => {
      // Your code goes here to render each character name in the ol#character-list element
      // And to also add a click handler so that the img#headshot element gets populated with the character's
      // image from the API
    });
  })
  .catch((error) => console.error("Error fetching characters:", error));
