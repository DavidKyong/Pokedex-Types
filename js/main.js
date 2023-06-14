const imageFolder = 'images/';

const imageFiles = [
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

const $row = document.querySelector('.row-content');

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
      $pokemonImage.setAttribute('src', imageFolder + imageFiles[i]);
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
