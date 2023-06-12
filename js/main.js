const $container = document.querySelector('.container');

function getAllPokemonNames() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=151');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    const pokemonList = xhr.response.results;

    for (let i = 0; i < pokemonList.length; i++) {
      const pokemonName = pokemonList[i].name;
      const $pokemonName = document.createElement('p');
      $pokemonName.textContent = pokemonName;

      const $pokemonHolder = document.createElement('div');
      $pokemonHolder.className = 'pokemon-name';
      $pokemonHolder.appendChild($pokemonName);

      const $column = document.createElement('div');
      $column.className = 'column-one-fifth';
      $column.appendChild($pokemonHolder);

      const $row = document.createElement('div');
      $row.className = 'row-content';
      $row.appendChild($column);

      $container.appendChild($row);

    }
  });
  xhr.send();
}
getAllPokemonNames();

// function getPokemonData(name) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/');
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function () {
//     console.log('status', xhr.status);
//     console.log(xhr.response.name);
//     for (let i = 0; i < xhr.response.length; i++) {
//       const $pokemonImage = document.createElement('img');
//       $pokemonImage.setAttribute('src', xhr.response[i].sprites.front_default);
//       $row.appendChild($pokemonImage);
//     }
//   });
//   xhr.send();
// }

// function renderPokemon(pokemon) {
//   const $columnFifth = document.createElement('div');
//   $columnFifth.className = 'column-one-fifth';

//   const $pokemonImage = document.createElement('img');
//   $pokemonImage.setAttribute('src', xhr.response.sprites[4]);
//   $columnFifth.appendChild($pokemonImage);

//   const $pokemonHolder = document.createElement('div');
//   $pokemonHolder.className = 'pokemon-name';
//   $columnFifth.appendChild($pokemonHolder);

//   const $pokemonName = document.createElement('p');
//   $pokemonName.textContent = xhr.reponse.name + ' #' + xhr.reponse.id;
//   $pokemonHolder.appendChild($pokemonName);

//   $row.appendChild($columnFifth);

//   return $columnFifth;

// }

// console.log(pokemonPicture);
