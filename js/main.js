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

const bug = [
  'Caterpie.gif',
  'metapod.gif',
  'butterfree.gif',
  'weedle.gif',
  'kakuna.gif',
  'beedrill.gif',
  'paras.gif',
  'parasect.gif',
  'venonat.gif',
  'venomoth.gif',
  'scyther.gif',
  'pinsir.gif'
];

const dragon = [
  'dratini.gif',
  'dragonair.gif',
  'dragonite.gif'
];

const electric = [
  'pikachu.gif',
  'raichu.gif',
  'magnemite.gif',
  'magneton.gif',
  'voltorb.gif',
  'electrode.gif',
  'electabuzz.gif',
  'jolteon.gif',
  'zapdos.gif'
];

const fighting = [
  'mankey.gif',
  'primeape.gif',
  'poliwrath.gif',
  'machop.gif',
  'machoke.gif',
  'machamp.gif',
  'hitmonlee.gif',
  'hitnonchan.gif'
];

const grass = [
  'bulbasaur.gif',
  'Ivysaur.gif',
  'Venasaur.gif',
  'oddish.gif',
  'gloom.gif',
  'vileplume.gif',
  'paras.gif',
  'parasect.gif',
  'bellsprout.gif',
  'weepinbell.gif',
  'victreebel.gif',
  'exeggcute.gif',
  'exeggutor.gif',
  'tangela.gif'
];

const poison = [
  'bulbasaur.gif',
  'Ivysaur.gif',
  'Venasaur.gif',
  'weedle.gif',
  'kakuna.gif',
  'beedrill.gif',
  'ekans.gif',
  'arbok.gif',
  'nidoran.gif',
  'nidorina.gif',
  'nidoqueen.gif',
  'nidoran M.gif',
  'nidorino.gif',
  'nidoking.gif',
  'zubat.gif',
  'Golbat.gif',
  'oddish.gif',
  'gloom.gif',
  'vileplume.gif',
  'venonat.gif',
  'venomoth.gif',
  'bellsprout.gif',
  'weepinbell.gif',
  'victreebel.gif',
  'tentacool.gif',
  'tentacruel.gif',
  'grimer.gif',
  'muk.gif',
  'gastly.gif',
  'haunter.gif',
  'gengar.gif',
  'koffing.gif',
  'weezing.gif'
];

const fire = [
  'Charmander.gif',
  'Charmeleon.gif',
  'Charizard.gif',
  'vulpix.gif',
  'ninetales.gif',
  'growlithe.gif',
  'arcanine.gif',
  'ponyta.gif',
  'rapidash.gif',
  'magmar.gif',
  'flareon.gif',
  'moltres.gif'
];

const flying = [
  'Charizard.gif',
  'butterfree.gif',
  'pidgey.gif',
  'pidgeotto.gif',
  'pidgeot.gif',
  'spearow.gif',
  'fearow.gif',
  'zubat.gif',
  'Golbat.gif',
  'farfetchd.gif',
  'doduo.gif',
  'dodrio.gif',
  'scyther.gif',
  'gyarados.gif',
  'aerodactyl.gif',
  'articuno.gif',
  'zapdos.gif',
  'moltres.gif',
  'dragonite.gif'
];

const water = [
  'Squirtle.gif',
  'Warturtle.gif',
  'Blastoise.gif',
  'psyduck.gif',
  'golduck.gif',
  'Poliwag.gif',
  'poliwhirl.gif',
  'poliwrath.gif',
  'tentacool.gif',
  'tentacruel.gif',
  'slowpoke.gif',
  'slowbro.gif',
  'seel.gif',
  'dewgong.gif',
  'shellder.gif',
  'cloyster.gif',
  'krabby.gif',
  'kingler.gif',
  'horsea.gif',
  'seadra.gif',
  'goldeen.gif',
  'seaking.gif',
  'staryu.gif',
  'starmie.gif',
  'magikarp.gif',
  'gyarados.gif',
  'lapras.gif',
  'vaporeon.gif',
  'omanyte.gif',
  'omastar.gif',
  'kabuto.gif',
  'kabutops.gif'

];

const normal = [
  'pidgey.gif',
  'pidgeotto.gif',
  'pidgeot.gif',
  'rattata.gif',
  'raticate.gif',
  'spearow.gif',
  'fearow.gif',
  'jigglepuff.gif',
  'wiggletuff.gif',
  'meowth.gif',
  'persian.gif',
  'farfetchd.gif',
  'doduo.gif',
  'dodrio.gif',
  'lickitung.gif',
  'chansey.gif',
  'kangaskhan.gif',
  'tauros.gif',
  'ditto.gif',
  'eevee.gif',
  'porygon.gif',
  'snorlax.gif'

];

const ground = [
  'sandshrew.gif',
  'sandslash.gif',
  'nidoqueen.gif',
  'nidoking.gif',
  'diglett.gif',
  'dugtrio.gif',
  'geodude.gif',
  'graveler.gif',
  'golem.gif',
  'onix.gif',
  'cubone.gif',
  'marowak.gif',
  'rhyhorn.gif',
  'rhydon.gif'
];

const psychic = [
  'abra.gif',
  'kadabra.gif',
  'alakazam.gif',
  'slowpoke.gif',
  'slowbro.gif',
  'drowzee.gif',
  'hypno.gif',
  'exeggcute.gif',
  'exeggutor.gif',
  'starmie.gif',
  'mr. mime.gif',
  'jynx.gif',
  'mewtwo.gif',
  'mew.gif'

];

const rock = [
  'geodude.gif',
  'graveler.gif',
  'golem.gif',
  'onix.gif',
  'rhyhorn.gif',
  'rhydon.gif',
  'omanyte.gif',
  'omastar.gif',
  'kabuto.gif',
  'kabutops.gif',
  'aerodactyl.gif'
];

const ice = [
  'dewgong.gif',
  'cloyster.gif',
  'jynx.gif',
  'lapras.gif',
  'articuno.gif'
];

const ghost = [
  'gastly.gif',
  'haunter.gif',
  'gengar.gif'
];

const $row = document.querySelector('.row-content');
const $waterRow = document.querySelector('.row.water');
const $fireRow = document.querySelector('.row.fire');
const $bugRow = document.querySelector('.row.bug');
const $dragonRow = document.querySelector('.row.dragon');
const $electricRow = document.querySelector('.row.electric');
const $fightingRow = document.querySelector('.row.fighting');
const $flyingRow = document.querySelector('.row.flying');
const $ghostRow = document.querySelector('.row.ghost');
const $grassRow = document.querySelector('.row.grass');
const $groundRow = document.querySelector('.row.ground');
const $iceRow = document.querySelector('.row.ice');
const $normalRow = document.querySelector('.row.normal');
const $poisonRow = document.querySelector('.row.poison');
const $psychicRow = document.querySelector('.row.psychic');
const $rockRow = document.querySelector('.row.rock');
const $titleRow = document.querySelector('.row.title-row');
const $type = document.querySelector('.navbar-type');
const $pokedex = document.querySelector('h1');
const $bugTitle = document.querySelector('.row.bug-type');
const $dragonTitle = document.querySelector('.row.dragon-type');
const $electricTitle = document.querySelector('.row.electric-type');
const $fightingTitle = document.querySelector('.row.fighting-type');
const $fireTitle = document.querySelector('.row.fire-type');
const $flyingTitle = document.querySelector('.row.flying-type');
const $ghostTitle = document.querySelector('.row.ghost-type');
const $grassTitle = document.querySelector('.row.grass-type');
const $groundTitle = document.querySelector('.row.ground-type');
const $iceTitle = document.querySelector('.row.ice-type');
const $normalTitle = document.querySelector('.row.normal-type');
const $poisonTitle = document.querySelector('.row.poison-type');
const $psychicTitle = document.querySelector('.row.psychic-type');
const $rockTitle = document.querySelector('.row.rock-type');
const $waterTitle = document.querySelector('.row.water-type');
const $savedRow = document.querySelector('.row.saved');
const $savedPokemon = document.querySelector('.row.saved-pokemon');
const $pokemonInfo = document.querySelector('.row.pokemon-info');
const $pokemonPic = document.querySelector('.row.pokemon-pic');

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
      $pokemonName.textContent = `${pokemonName} #${pokemonEntryID}`;

      const $pokemonImage = document.createElement('img');
      $pokemonImage.setAttribute('src', imageFolder + allPokemon[i]);
      $pokemonImage.setAttribute('alt', 'pokemon');

      const $pokemonHolder = document.createElement('div');
      $pokemonHolder.className = 'pokemon-name';
      $pokemonHolder.appendChild($pokemonName);

      const $column = document.createElement('div');
      $column.className = 'column-one-fifth' + ' ' + pokemonName;
      $column.appendChild($pokemonImage);
      $column.appendChild($pokemonHolder);

      $row.appendChild($column);
    }
  });
  xhr.send();
}
getPokemonName();

function renderPokemon(pokemon, imagePath, row) {
  const pokemonName = pokemon.pokemon.name.toUpperCase();
  const $type = document.createElement('p');
  $type.textContent = pokemonName;

  const $pokemonImage = document.createElement('img');
  $pokemonImage.setAttribute('src', imageFolder + imagePath);
  $pokemonImage.setAttribute('alt', 'pokemon');

  const $pokemonHolder = document.createElement('div');
  $pokemonHolder.className = 'pokemon-name';
  $pokemonHolder.appendChild($type);

  const $column = document.createElement('div');
  $column.className = 'column-one-fifth';
  $column.appendChild($pokemonImage);
  $column.appendChild($pokemonHolder);

  row.appendChild($column);
}

function getBugType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/7/');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const bugType = typeXHR.response.pokemon;
    for (let i = 0; i <= 11; i++) {
      renderPokemon(bugType[i], bug[i], $bugRow);
    }
  });
  typeXHR.send();
}
getBugType();

function getDragonType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/16');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const dragonType = typeXHR.response.pokemon;
    for (let i = 0; i <= 2; i++) {
      renderPokemon(dragonType[i], dragon[i], $dragonRow);
    }
  });
  typeXHR.send();
}
getDragonType();

function getNormalType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/1');
  typeXHR.responseType = 'json';
  typeXHR.addEventListener('load', function (event) {
    const normalType = typeXHR.response.pokemon;
    for (let i = 0; i <= 21; i++) {
      renderPokemon(normalType[i], normal[i], $normalRow);
    }
  });
  typeXHR.send();
}
getNormalType();

function getfightingType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/2/');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const fightingType = typeXHR.response.pokemon;
    for (let i = 0; i <= 7; i++) {
      renderPokemon(fightingType[i], fighting[i], $fightingRow);
    }
  });
  typeXHR.send();
}
getfightingType();

function getflyingType() {

  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/3/');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const flyingType = typeXHR.response.pokemon;
    for (let i = 0; i <= 18; i++) {
      renderPokemon(flyingType[i], flying[i], $flyingRow);
    }
  });
  typeXHR.send();
}
getflyingType();

function getPoisonType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/4/');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const poisonType = typeXHR.response.pokemon;
    for (let i = 0; i <= 32; i++) {
      renderPokemon(poisonType[i], poison[i], $poisonRow);
    }
  });
  typeXHR.send();
}
getPoisonType();

function getGroundType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/5/');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const groundType = typeXHR.response.pokemon;
    for (let i = 0; i <= 13; i++) {
      renderPokemon(groundType[i], ground[i], $groundRow);
    }
  });
  typeXHR.send();
}
getGroundType();

function getElectricType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/13/');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const electricType = typeXHR.response.pokemon;
    for (let i = 0; i <= 8; i++) {
      renderPokemon(electricType[i], electric[i], $electricRow);
    }
  });
  typeXHR.send();
}
getElectricType();

function getRockType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/6/');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const rockType = typeXHR.response.pokemon;
    for (let i = 0; i <= 10; i++) {
      renderPokemon(rockType[i], rock[i], $rockRow);
    }
  });
  typeXHR.send();
}
getRockType();

function getGhostType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/8/');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const ghostType = typeXHR.response.pokemon;
    for (let i = 0; i <= 2; i++) {
      renderPokemon(ghostType[i], ghost[i], $ghostRow);
    }
  });
  typeXHR.send();
}
getGhostType();

function getFireType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/10/');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const fireType = typeXHR.response.pokemon;
    for (let i = 0; i <= 11; i++) {
      renderPokemon(fireType[i], fire[i], $fireRow);
    }
  });
  typeXHR.send();
}
getFireType();

function getWaterType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/11/');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const waterType = typeXHR.response.pokemon;
    for (let i = 0; i <= 31; i++) {
      renderPokemon(waterType[i], water[i], $waterRow);
    }
  });
  typeXHR.send();
}
getWaterType();

function getGrassType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/12');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const grassType = typeXHR.response.pokemon;
    for (let i = 0; i <= 13; i++) {
      renderPokemon(grassType[i], grass[i], $grassRow);
    }
  });
  typeXHR.send();
}
getGrassType();

function getPsychicType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/14/');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const psychicType = typeXHR.response.pokemon;
    for (let i = 0; i <= 13; i++) {
      renderPokemon(psychicType[i], psychic[i], $psychicRow);
    }
  });
  typeXHR.send();
}
getPsychicType();

function getIceType() {
  const typeXHR = new XMLHttpRequest();
  typeXHR.open('GET', 'https://pokeapi.co/api/v2/type/15/');
  typeXHR.responseType = 'json';

  typeXHR.addEventListener('load', function (event) {
    const iceType = typeXHR.response.pokemon;
    for (let i = 0; i <= 4; i++) {
      renderPokemon(iceType[i], ice[i], $iceRow);
    }
  });
  typeXHR.send();
}
getIceType();

$type.addEventListener('click', function (event) {
  viewSwap('types');
});

$pokedex.addEventListener('click', function (event) {
  viewSwap('homepage');
});

function viewSwap(name) {
  if (name === 'onePokemon') {
    $fireRow.className = 'row fire hidden';
    $waterRow.className = 'row water hidden';
    $bugRow.className = 'row bug hidden';
    $dragonRow.className = 'row dragon hidden';
    $electricRow.className = 'row electric hidden';
    $fightingRow.className = 'row fighting hidden';
    $flyingRow.className = 'row flying hidden';
    $ghostRow.className = 'row ghost hidden';
    $grassRow.className = 'row grass hidden';
    $groundRow.className = 'row ground hidden';
    $iceRow.className = 'row ice hidden';
    $normalRow.className = 'row normal hidden';
    $poisonRow.className = 'row poison hidden';
    $psychicRow.className = 'row psychic hidden';
    $rockRow.className = 'row rock hidden';
    $row.className = 'row-content hidden';
    $titleRow.className = 'row title-row hidden';
    $bugTitle.className = 'row bug-type hidden';
    $dragonTitle.className = 'row dragon-type hidden';
    $electricTitle.className = 'row electric-type hidden';
    $fightingTitle.className = 'row fighting-type hidden';
    $fireTitle.className = 'row fire-type hidden';
    $flyingTitle.className = 'row flying-type hidden';
    $ghostTitle.className = 'row ghost-type hidden';
    $grassTitle.className = 'row grass-type hidden';
    $groundTitle.className = 'row ground-type hidden';
    $iceTitle.className = 'row ice-type hidden';
    $normalTitle.className = 'row normal-type hidden';
    $poisonTitle.className = 'row poison-type hidden';
    $psychicTitle.className = 'row psychic-type hidden';
    $rockTitle.className = 'row rock-type hidden';
    $waterTitle.className = 'row water-type hidden';
    $savedRow.className = 'row saved hidden';
    $savedPokemon.className = 'row saved-pokemon hidden';
    $pokemonInfo.className = 'row pokemon-info';
    $pokemonPic.className = 'row pokemon-pic';
  } else if (name === 'saved') {
    $fireRow.className = 'row fire hidden';
    $waterRow.className = 'row water hidden';
    $bugRow.className = 'row bug hidden';
    $dragonRow.className = 'row dragon hidden';
    $electricRow.className = 'row electric hidden';
    $fightingRow.className = 'row fighting hidden';
    $flyingRow.className = 'row flying hidden';
    $ghostRow.className = 'row ghost hidden';
    $grassRow.className = 'row grass hidden';
    $groundRow.className = 'row ground hidden';
    $iceRow.className = 'row ice hidden';
    $normalRow.className = 'row normal hidden';
    $poisonRow.className = 'row poison hidden';
    $psychicRow.className = 'row psychic hidden';
    $rockRow.className = 'row rock hidden';
    $row.className = 'row-content hidden';
    $titleRow.className = 'row title-row hidden';
    $bugTitle.className = 'row bug-type hidden';
    $dragonTitle.className = 'row dragon-type hidden';
    $electricTitle.className = 'row electric-type hidden';
    $fightingTitle.className = 'row fighting-type hidden';
    $fireTitle.className = 'row fire-type hidden';
    $flyingTitle.className = 'row flying-type hidden';
    $ghostTitle.className = 'row ghost-type hidden';
    $grassTitle.className = 'row grass-type hidden';
    $groundTitle.className = 'row ground-type hidden';
    $iceTitle.className = 'row ice-type hidden';
    $normalTitle.className = 'row normal-type hidden';
    $poisonTitle.className = 'row poison-type hidden';
    $psychicTitle.className = 'row psychic-type hidden';
    $rockTitle.className = 'row rock-type hidden';
    $waterTitle.className = 'row water-type hidden';
    $savedRow.className = 'row saved';
    $savedPokemon.className = 'row saved-pokemon';
    $pokemonInfo.className = 'row pokemon-info hidden';
    $pokemonPic.className = 'row pokemon-pic hidden';
  } else if (name === 'types') {
    $fireRow.className = 'row fire';
    $waterRow.className = 'row water';
    $bugRow.className = 'row bug';
    $dragonRow.className = 'row dragon';
    $electricRow.className = 'row electric';
    $fightingRow.className = 'row fighting';
    $flyingRow.className = 'row flying';
    $ghostRow.className = 'row ghost';
    $grassRow.className = 'row grass';
    $groundRow.className = 'row ground';
    $iceRow.className = 'row ice';
    $normalRow.className = 'row normal';
    $poisonRow.className = 'row poison';
    $psychicRow.className = 'row psychic';
    $rockRow.className = 'row rock';
    $row.className = 'row-content hidden';
    $titleRow.className = 'row title-row hidden';
    $bugTitle.className = 'row bug-type';
    $dragonTitle.className = 'row dragon-type';
    $electricTitle.className = 'row electric-type';
    $fightingTitle.className = 'row fighting-type';
    $fireTitle.className = 'row fire-type';
    $flyingTitle.className = 'row flying-type';
    $ghostTitle.className = 'row ghost-type';
    $grassTitle.className = 'row grass-type';
    $groundTitle.className = 'row ground-type';
    $iceTitle.className = 'row ice-type';
    $normalTitle.className = 'row normal-type';
    $poisonTitle.className = 'row poison-type';
    $psychicTitle.className = 'row psychic-type';
    $rockTitle.className = 'row rock-type';
    $waterTitle.className = 'row water-type';
    $savedRow.className = 'row saved hidden';
    $savedPokemon.className = 'row saved-pokemon hidden';
    $pokemonInfo.className = 'row pokemon-info hidden';
    $pokemonPic.className = 'row pokemon-pic hidden';
  } else if (name === 'homepage') {
    $fireRow.className = 'row fire hidden';
    $waterRow.className = 'row water hidden';
    $bugRow.className = 'row bug hidden';
    $dragonRow.className = 'row dragon hidden';
    $electricRow.className = 'row electric hidden';
    $fightingRow.className = 'row fighting hidden';
    $flyingRow.className = 'row flying hidden';
    $ghostRow.className = 'row ghost hidden';
    $grassRow.className = 'row grass hidden';
    $groundRow.className = 'row ground hidden';
    $iceRow.className = 'row ice hidden';
    $normalRow.className = 'row normal hidden';
    $poisonRow.className = 'row poison hidden';
    $psychicRow.className = 'row psychic hidden';
    $rockRow.className = 'row rock hidden';
    $row.className = 'row-content';
    $titleRow.className = 'row title-row';
    $bugTitle.className = 'row bug-type hidden';
    $dragonTitle.className = 'row dragon-type hidden';
    $electricTitle.className = 'row electric-type hidden';
    $fightingTitle.className = 'row fighting-type hidden';
    $fireTitle.className = 'row fire-type hidden';
    $flyingTitle.className = 'row flying-type hidden';
    $ghostTitle.className = 'row ghost-type hidden';
    $grassTitle.className = 'row grass-type hidden';
    $groundTitle.className = 'row ground-type hidden';
    $iceTitle.className = 'row ice-type hidden';
    $normalTitle.className = 'row normal-type hidden';
    $poisonTitle.className = 'row poison-type hidden';
    $psychicTitle.className = 'row psychic-type hidden';
    $rockTitle.className = 'row rock-type hidden';
    $waterTitle.className = 'row water-type hidden';
    $savedRow.className = 'row saved hidden';
    $savedPokemon.className = 'row saved-pokemon hidden';
    $pokemonInfo.className = 'row pokemon-info hidden';
    $pokemonPic.className = 'row pokemon-pic hidden';
  }
}
const $oneRowPokemonPic = document.querySelector('.row.pokemon-pic');

$row.addEventListener('click', function (event) {
  const selectedPokemon = event.target.getAttribute('src');
  const selectedPokemonName = event.target.getAttribute('alt');

  const existingPokemon = $oneRowPokemonPic.querySelector(`img[src="${selectedPokemon}"]`);

  if (!existingPokemon) {
    const $existingContent = $oneRowPokemonPic.querySelectorAll('.column-half');
    for (let i = 0; i < $existingContent.length; i++) {
      const element = $existingContent[i];
      element.remove();
    }

    const $existingColumns = document.querySelectorAll('.column');
    for (let i = 0; i < $existingColumns.length; i++) {
      const element = $existingColumns[i];
      element.remove();
    }

    const $pokemonPic = document.createElement('img');
    $pokemonPic.setAttribute('src', selectedPokemon);
    $pokemonPic.setAttribute('alt', selectedPokemonName);

    const $weak = document.createElement('ul');
    const $weak1 = document.createElement('li');
    $weak1.textContent = 'No damage to:';
    $weak.appendChild($weak1);

    const $columnHalf = document.createElement('div');
    $columnHalf.className = 'column-half';
    $columnHalf.appendChild($weak);

    const $columnSelect = document.createElement('div');
    $columnSelect.className = 'column-half select';
    $columnSelect.appendChild($pokemonPic);

    const formattedPokemonName = selectedPokemon.replace('images/', '').replace('.gif', '');

    const $pokemonTitle = document.createElement('h2');
    $pokemonTitle.setAttribute('id', 'pokemon-name');
    $pokemonTitle.textContent = formattedPokemonName.toUpperCase();

    const $icon = document.createElement('i');
    $icon.className = 'fa-solid fa-circle-plus fa-2xl';

    $icon.addEventListener('click', function () {

      const savedPokemon = {
        name: formattedPokemonName.toUpperCase(),
        image: selectedPokemon
      };
      // eslint-disable-next-line no-undef
      pokemonData.saved.push(savedPokemon);
      viewSwap('saved');
    });

    const $pageTitle = document.createElement('div');
    $pageTitle.className = 'page-title one-pokemon';
    $pageTitle.appendChild($pokemonTitle);
    $pageTitle.appendChild($icon);

    const $column = document.createElement('div');
    $column.className = 'column';
    $column.appendChild($pageTitle);

    $oneRowPokemonPic.appendChild($columnSelect);
    $oneRowPokemonPic.appendChild($columnHalf);
    $pokemonInfo.appendChild($column);

    viewSwap('onePokemon');
  }
});
