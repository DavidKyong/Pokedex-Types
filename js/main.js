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
        const pokemonName = normalType[i].pokemon.name.toUpperCase();
        const $normalType = document.createElement('p');
        $normalType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + normal[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($normalType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $normalRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}
getNormalType();

function getfightingType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[1].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const fightingType = typeXHR.response.pokemon;
      for (let i = 0; i <= 7; i++) {
        const pokemonName = fightingType[i].pokemon.name.toUpperCase();
        const $fightingType = document.createElement('p');
        $fightingType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + fighting[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($fightingType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $fightingRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}
getfightingType();

function getflyingType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[2].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const flyingType = typeXHR.response.pokemon;
      for (let i = 0; i <= 18; i++) {
        const pokemonName = flyingType[i].pokemon.name.toUpperCase();
        const $flyingType = document.createElement('p');
        $flyingType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + flying[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($flyingType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $flyingRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}

getflyingType();

function getPoisonType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[3].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const poisonType = typeXHR.response.pokemon;
      for (let i = 0; i <= 32; i++) {
        const pokemonName = poisonType[i].pokemon.name.toUpperCase();
        const $poisonType = document.createElement('p');
        $poisonType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + poison[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($poisonType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $poisonRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}
getPoisonType();

function getGroundType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[4].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const groundType = typeXHR.response.pokemon;
      for (let i = 0; i <= 13; i++) {
        const pokemonName = groundType[i].pokemon.name.toUpperCase();
        const $groundType = document.createElement('p');
        $groundType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + ground[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($groundType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $groundRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}

getGroundType();

function getRockType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[5].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const rockType = typeXHR.response.pokemon;
      for (let i = 0; i <= 10; i++) {
        const pokemonName = rockType[i].pokemon.name.toUpperCase();
        const $rockType = document.createElement('p');
        $rockType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + rock[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($rockType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $rockRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}

getRockType();

function getBugType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[6].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const bugType = typeXHR.response.pokemon;
      for (let i = 0; i <= 11; i++) {
        const pokemonName = bugType[i].pokemon.name.toUpperCase();
        const $bugType = document.createElement('p');
        $bugType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + bug[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($bugType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $bugRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}

getBugType();

function getGhostType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[7].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const ghostType = typeXHR.response.pokemon;
      for (let i = 0; i <= 2; i++) {
        const pokemonName = ghostType[i].pokemon.name.toUpperCase();
        const $ghostType = document.createElement('p');
        $ghostType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + ghost[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($ghostType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $ghostRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}

getGhostType();

function getFireType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[9].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const fireType = typeXHR.response.pokemon;
      for (let i = 0; i <= 11; i++) {
        const pokemonName = fireType[i].pokemon.name.toUpperCase();
        const $fireType = document.createElement('p');
        $fireType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + fire[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($fireType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $fireRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}

getFireType();

function getWaterType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[10].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const waterType = typeXHR.response.pokemon;
      for (let i = 0; i <= 31; i++) {
        const pokemonName = waterType[i].pokemon.name.toUpperCase();
        const $waterType = document.createElement('p');
        $waterType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + water[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($waterType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $waterRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}

getWaterType();

function getGrassType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[11].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const grassType = typeXHR.response.pokemon;
      for (let i = 0; i <= 13; i++) {
        const pokemonName = grassType[i].pokemon.name.toUpperCase();
        const $grassType = document.createElement('p');
        $grassType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + grass[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($grassType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $grassRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}

getGrassType();

function getElectricType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[12].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const electricType = typeXHR.response.pokemon;
      for (let i = 0; i <= 8; i++) {
        const pokemonName = electricType[i].pokemon.name.toUpperCase();
        const $electricType = document.createElement('p');
        $electricType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + electric[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($electricType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $electricRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}

getElectricType();

function getPsychicType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[13].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const psychicType = typeXHR.response.pokemon;
      for (let i = 0; i <= 13; i++) {
        const pokemonName = psychicType[i].pokemon.name.toUpperCase();
        const $psychicType = document.createElement('p');
        $psychicType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + psychic[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($psychicType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $psychicRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}

getPsychicType();

function getIceType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[14].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const iceType = typeXHR.response.pokemon;
      for (let i = 0; i <= 4; i++) {
        const pokemonName = iceType[i].pokemon.name.toUpperCase();
        const $iceType = document.createElement('p');
        $iceType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + ice[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($iceType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $iceRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}

getIceType();

function getDragonType() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/type');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (event) {
    const typeList = xhr.response.results;
    const typeURL = typeList[15].url;

    const typeXHR = new XMLHttpRequest();
    typeXHR.open('GET', typeURL);
    typeXHR.responseType = 'json';

    typeXHR.addEventListener('load', function (event) {
      const dragonType = typeXHR.response.pokemon;
      for (let i = 0; i <= 2; i++) {
        const pokemonName = dragonType[i].pokemon.name.toUpperCase();
        const $dragonType = document.createElement('p');
        $dragonType.textContent = pokemonName;

        const $pokemonImage = document.createElement('img');
        $pokemonImage.setAttribute('src', imageFolder + dragon[i]);
        $pokemonImage.setAttribute('alt', 'pokemon');

        const $pokemonHolder = document.createElement('div');
        $pokemonHolder.className = 'pokemon-name';
        $pokemonHolder.appendChild($dragonType);

        const $column = document.createElement('div');
        $column.className = 'column-one-fifth';
        $column.appendChild($pokemonImage);
        $column.appendChild($pokemonHolder);

        $dragonRow.appendChild($column);
      }
    });
    typeXHR.send();
  });
  xhr.send();
}

getDragonType();

const $titleRow = document.querySelector('.row.title-row');

// function viewSwap(typename) {
//   if (typename === 'types') {
//     $allPokemon.className = 'row-content hidden';
//     $titleRow.className = 'row title-row show';
//   } else if (typename === 'all') {
//     $allPokemon.className = 'row-content';
//     $titleRow.className = 'row title-row hidden';
//   } maybe use for saved pokemons
// }

const $type = document.querySelector('.navbar-type');

$type.addEventListener('click', function (event) {
  $row.className = 'row-content hidden';
  $titleRow.className = 'row title-row hidden';
});

const $pokedex = document.querySelector('h1');

$pokedex.addEventListener('click', function (event) {
  $row.className = 'row-content';
  $titleRow.className = 'row title-row';
});
