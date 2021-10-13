/* eslint-disable linebreak-style */
/* eslint-disable no-await-in-loop */

const pokemons = document.querySelector('.pokemons');
const limit = 8;
const offset = 1;

const pokemonArr = [];

async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  return data;
}

async function getPokemons(offset, limit) {
  for (let i = offset; i <= offset + limit; i += 1) {
    pokemonArr.push(await getPokemon(i));
  }
}

export default async function populateGrid() {
  await getPokemons(offset, limit);

  pokemonArr.forEach((pokemon) => {
    const element = document.createElement('div');
    element.classList.add('pokecard', 'd-flex', 'flex-column', 'justify-content-around');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('pokeimg-container');

    const pokeImg = document.createElement('img');
    pokeImg.src = pokemon.sprites.other['official-artwork'].front_default;
    imgContainer.appendChild(pokeImg);

    const pokeName = document.createElement('p');
    pokeName.classList.add('poke-name');
    pokeName.classList.add('m-1');
    pokeName.textContent = pokemon.name;

    const comBtn = document.createElement('button');
    comBtn.textContent = 'Comment';
    comBtn.classList.add('btn', 'comment-button');
    comBtn.classList.add('btn-info');

    element.appendChild(imgContainer);
    element.appendChild(pokeName);
    element.appendChild(comBtn);

    pokemons.append(element);
  });
}
