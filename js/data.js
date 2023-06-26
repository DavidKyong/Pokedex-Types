/* exported data */
var pokemonData = {
  saved: []
};

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(pokemonData);
  localStorage.setItem('javascript-local-storage', dataJSON);
});

const previousDataJSON = localStorage.getItem('javascript-local-storage');
if (previousDataJSON !== null) {
  pokemonData = JSON.parse(previousDataJSON);
}
