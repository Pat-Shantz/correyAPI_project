// Fetch Futurama characters and populate the ordered list
const list = document.getElementById("character-list");
const headshot = document.getElementById("headshot");

fetch("https://api.sampleapis.com/futurama/characters")
    //fetches the api
  .then((response) => response.json())
  //response.json() -> converts the response body to a Javascript object/array
  .then((characters) => {
  //.then((characters) ... receives the parsed JSON data (an array) - and then parses (turns) it into a JavaScript Array (called 'characters') - (im defining an anonymous function)
    characters.forEach((character) => {
      // Your code goes here to render each character name in the ol#character-list element
      // Hey Pat! So for your question
      // > but i think i'm turning the 'data' into an array, then into a json, then into an array named 'characters' ?
      // Correct! So each element of the array is in the variable 'character' here
      // > is there a way i could SEE the characters array? (what would i type for that? would i do that in the terminal?)
      // You can see each character in the array by adding the code I've suggested below:
      console.log(character);
      // Then open up index.html in your Browser, and take a look at the DevTools in your console
      // and you can see each character getting printed at the above line!
      // If you wanted to see the whole array, you could do
      // console.log(characters);
      // But that will repeatedly print the whole array N times, where N is the number of characters in the array
      const characterNameListItem = document.createElement("li");
      characterNameListItem.textContent = character.name.first;
      
      // And to also add a click handler so that the img#headshot element gets populated with the character's
      // image from the API
    });
  })
  .catch((error) => console.error("Error fetching characters:", error));
