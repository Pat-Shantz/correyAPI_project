// Fetch Futurama characters and populate the ordered list
const list = document.getElementById("character-list");
const headshot = document.getElementById("headshot");

fetch("https://api.sampleapis.com/futurama/characters")
    //fetches the api
  .then((response) => response.json())
  .then((characters) => {
    console.log(characters)
    characters.forEach((character) => {
      // Your code goes here to render each character name in the ol#character-list element
      const characterNameListItem = document.createElement("li");
      characterNameListItem.textContent = `${character.name.first} ${character.name.last}`;
      // add a click event listener
      characterNameListItem.addEventListener("click", () => {
        headshot.src = character.images.main;
        headshot.alt = `headshot of${character.name.first}`;
      });
      list.appendChild(characterNameListItem);
      // And to also add a click handler so that the img#headshot element gets populated with the character's
      // image from the API
    });
  })
  .catch((error) => console.error("Error fetching characters:", error));