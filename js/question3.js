const url = "https://api.rawg.io/api/games/4200";
const detailsDiv = document.querySelector(".container");

fetch(url)
  .then(response => response.json())
  .then(createGameDetails)
  .catch(error => console.error("Encountered error:", error));

function createGameDetails(jsonData) {
  const { name, description, background_image } = jsonData;

  const header = detailsDiv.querySelector("h1");
  const imageDiv = detailsDiv.querySelector(".image");
  const descriptionDiv = detailsDiv.querySelector(".description");

  header.innerText = name;
  imageDiv.style.backgroundImage = `url(${background_image})`;
  descriptionDiv.innerHTML = description;
}
