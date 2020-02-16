const url = "https://api.rawg.io/api/games";
const resultsDiv = document.querySelector(".results");

fetch(url)
  .then(response => response.json())
  .then(createGames)
  .catch(error => console.error("Encountered error:", error));

function createGames(jsonData) {
  const { results } = jsonData;

  let gameHTML = "";

  results.forEach(game => {
    gameHTML += `
        <div class="game">
            <h2>${game.name}</h2>
            <img src="${game.background_image}" alt="${game.name}" width="400"/>
        </div>
    `;
  });

  resultsDiv.innerHTML = gameHTML;
}
