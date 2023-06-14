const imageFolder = 'images/';

const allPokemon = [
  'bulbasaur.gif',
  'Ivysaur.gif',
  'Venasaur.gif',
  'Charmander.gif',
  'Charmeleon.gif',
  'Charizard.gif',
  'Squirtle.gif',
  'Warturtle.gif',
  'Blastoise.gif',
  'Caterpie.gif',
  'metapod.gif',
  'butterfree.gif',
  'weedle.gif',
  'kakuna.gif',
  'beedrill.gif',
  'pidgey.gif',
  'pidgeotto.gif',
  'pidgeot.gif',
  'rattata.gif',
  'raticate.gif',
  'spearow.gif',
  'fearow.gif',
  'ekans.gif',
  'arbok.gif',
  'pikachu.gif',
  'raichu.gif',
  'sandshrew.gif',
  'sandslash.gif',
  'nidoran.gif',
  'nidorina.gif',
  'nidoqueen.gif',
  'nidoran M.gif',
  'nidorino.gif',
  'nidoking.gif',
  'clefairy.gif',
  'clefable.gif',
  'vulpix.gif',
  'ninetales.gif',
  'jigglepuff.gif',
  'wiggletuff.gif',
  'zubat.gif',
  'Golbat.gif',
  'oddish.gif',
  'gloom.gif',
  'vileplume.gif',
  'paras.gif',
  'parasect.gif',
  'venonat.gif',
  'venomoth.gif',
  'diglett.gif',
  'dugtrio.gif',
  'meowth.gif',
  'persian.gif',
  'psyduck.gif',
  'golduck.gif',
  'mankey.gif',
  'primeape.gif',
  'growlithe.gif',
  'arcanine.gif',
  'Poliwag.gif',
  'poliwhirl.gif',
  'poliwrath.gif',
  'abra.gif',
  'kadabra.gif',
  'alakazam.gif',
  'machop.gif',
  'machoke.gif',
  'machamp.gif',
  'bellsprout.gif',
  'weepinbell.gif',
  'victreebel.gif',
  'tentacool.gif',
  'tentacruel.gif',
  'geodude.gif',
  'graveler.gif',
  'golem.gif',
  'ponyta.gif',
  'rapidash.gif',
  'slowpoke.gif',
  'slowbro.gif',
  'magnemite.gif',
  'magneton.gif',
  'farfetchd.gif',
  'doduo.gif',
  'dodrio.gif',
  'seel.gif',
  'dewgong.gif',
  'grimer.gif',
  'muk.gif',
  'shellder.gif',
  'cloyster.gif',
  'gastly.gif',
  'haunter.gif',
  'gengar.gif',
  'onix.gif',
  'drowzee.gif',
  'hypno.gif',
  'krabby.gif',
  'kingler.gif',
  'voltorb.gif',
  'electrode.gif',
  'exeggcute.gif',
  'exeggutor.gif',
  'cubone.gif',
  'marowak.gif',
  'hitmonlee.gif',
  'hitnonchan.gif',
  'lickitung.gif',
  'koffing.gif',
  'weezing.gif',
  'rhyhorn.gif',
  'rhydon.gif',
  'chansey.gif',
  'tangela.gif',
  'kangaskhan.gif',
  'horsea.gif',
  'seadra.gif',
  'goldeen.gif',
  'seaking.gif',
  'staryu.gif',
  'starmie.gif',
  'mr. mime.gif',
  'scyther.gif',
  'jynx.gif',
  'electabuzz.gif',
  'magmar.gif',
  'pinsir.gif',
  'tauros.gif',
  'magikarp.gif',
  'gyarados.gif',
  'lapras.gif',
  'ditto.gif',
  'eevee.gif',
  'vaporeon.gif',
  'jolteon.gif',
  'flareon.gif',
  'porygon.gif',
  'omanyte.gif',
  'omastar.gif',
  'kabuto.gif',
  'kabutops.gif',
  'aerodactyl.gif',
  'snorlax.gif',
  'articuno.gif',
  'zapdos.gif',
  'moltres.gif',
  'dratini.gif',
  'dragonair.gif',
  'dragonite.gif',
  'mewtwo.gif',
  'mew.gif'
];

// const bug = [
//   'caterpie.gif',
//   'metapod.gif',
//   'butterfree.gif',
//   'weedle.gif',
//   'kakuna.gif',
//   'beedrill.gif',
//   'paras.gif',
//   'parasect.gif',
//   'venonat.gif',
//   'venomoth.gif',
//   'scyther.gif',
//   'pinsir.gif'
// ];

// const dragon = [
//   'dratini.gif',
//   'dragonair.gif',
//   'dragonite.gif'
// ];

// const electric = [
//   'pikachu.gif',
//   'raichu.gif',
//   'magnemite.gif',
//   'magneton.gif',
//   'voltorb.gif',
//   'electrode.gif',
//   'electabuzz.gif',
//   'jolteon.gif',
//   'zapdos.gif'
// ];

// const fighting = [
//   'mankey.gif',
//   'primeape',
//   'poliwrath.gif',
//   'machop.gif',
//   'machoke.gif',
//   'machamp.gif',
//   'hitmonlee.gif',
//   'hitnonchan.gif',
//   'primeape'
// ];

// const grass = [
//   'bulbasaur.gif',
//   'ivysaur.gif',
//   'venasaur.gif',
//   'oddish.gif',
//   'gloom.gif',
//   'vileplume.gif',
//   'paras.gif',
//   'parasect.gif',
//   'bellsprout.gif',
//   'weepinbell.gif',
//   'victreebel.gif',
//   'exeggcute.gif',
//   'exeggutor.gif',
//   'tangela.gif'
// ];

// const poison = [
//   'bulbasaur.gif',
//   'ivysaur.gif',
//   'venasaur.gif',
//   'weedle.gif',
//   'kakuna.gif',
//   'beedrill.gif',
//   'nidoran.gif',
//   'nidorina.gif',
//   'nidoqueen.gif',
//   'nidoran M.gif',
//   'nidorino.gif',
//   'nidoking.gif',
//   'oddish.gif',
//   'gloom.gif',
//   'vileplume.gif',
//   'venonat.gif',
//   'venomoth.gif',
//   'bellsprout.gif',
//   'weepinbell.gif',
//   'victreebel.gif'
// ];

// const fire = [];

// const flying = [];

// const water = [

// ];

// const normal = [];

// const ground = [];

// const fairy = [];

// const psychic = [];

// const rock = [];

// const steel = [];

// const ice = [];

// const ghost = [];

const $row = document.querySelector('.row-content');
// const $waterRow = document.querySelector('.row.water');
// const $fireRow = document.querySelector('.row.fire');
// const $bugRow = document.querySelector('.row.bug');
// const $dragonRow = document.querySelector('.row.dragon');
// const $electricRow = document.querySelector('.row.electric');
// const $fightingRow = document.querySelector('.row.fighting');
// const $flyingRow = document.querySelector('.row.flying');
// const $ghostRow = document.querySelector('.row.ghost');
// const $grassRow = document.querySelector('.row.grass');
// const $groundRow = document.querySelector('.row.ground');
// const $iceRow = document.querySelector('.row.ice');
// const $normalRow = document.querySelector('.row.normal');
// const $poisonRow = document.querySelector('.row.poison');
// const $psychicRow = document.querySelector('.row.psychic');
// const $rockRow = document.querySelector('.row.rock');

function getPokemonName() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=151');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    const pokemonList = xhr.response.results;
    for (let i = 0; i < pokemonList.length; i++) {
      const pokemonEntryID = i + 1;

      const pokemonName = pokemonList[i].name.toUpperCase();
      const $pokemonName = document.createElement('p');
      $pokemonName.textContent = pokemonName + ' #' + pokemonEntryID;

      const $pokemonImage = document.createElement('img');
      $pokemonImage.setAttribute('src', imageFolder + allPokemon[i]);
      $pokemonImage.setAttribute('alt', 'pokemon');

      const $pokemonHolder = document.createElement('div');
      $pokemonHolder.className = 'pokemon-name';
      $pokemonHolder.appendChild($pokemonName);

      const $column = document.createElement('div');
      $column.className = 'column-one-fifth';
      $column.appendChild($pokemonImage);
      $column.appendChild($pokemonHolder);

      $row.appendChild($column);
    }
  });
  xhr.send();
}

getPokemonName();

function getNormalType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[0].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const normalType = typeXHR.response.pokemon;
      for (let i = 0; i <= 21; i++) {
        const pokemonName = normalType[i].pokemon.name;
        const $normalType = document.createElement('p');
        $normalType.textContent = pokemonName;

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($normalType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        // $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

      }
    });
    typeXHR.send();
  });
  xhr.send();
}
getNormalType();
