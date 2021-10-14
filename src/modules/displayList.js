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

// function likesAmount(likes = 0) {
//   const res = `
//       ${likes}
//     `;
//   return res;
// }

export default async function populateGrid() {
  await getPokemons(offset, limit);

  pokemonArr.forEach((pokemon) => {
    const element = document.createElement('div');
    element.classList.add('pokecard', 'd-flex', 'flex-column', 'justify-content-around', 'position-relative');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('pokeimg-container');

    const pokeImg = document.createElement('img');
    pokeImg.src = pokemon.sprites.other['official-artwork'].front_default;
    imgContainer.appendChild(pokeImg);

    const nameLikesContainer = document.createElement('div');
    nameLikesContainer.classList.add('d-flex', 'flex-row', 'justify-content-center', 'align-items-center', 'name-likes-container', 'position-absolute');

    imgContainer.appendChild(nameLikesContainer);

    const pokeName = document.createElement('p');
    pokeName.classList.add('poke-name', 'me-2', 'mb-3', 'fs-3');

    const pokeLikesContainer = document.createElement('div');
    pokeLikesContainer.classList.add('me-2', 'fs-3');

    const pokeLikesIcon = document.createElement('i');
    pokeLikesIcon.classList.add('bi', 'bi-heart', 'fs-3');

    const pokeLikesCount = document.createElement('div');
    pokeLikesCount.id = ('');
    pokeLikesCount.classList.add('fs-3', 'mb-1');
    pokeLikesCount.textContent = '0';

    pokeName.textContent = pokemon.name;

    pokeLikesContainer.appendChild(pokeLikesIcon);

    nameLikesContainer.append(pokeLikesContainer, pokeLikesCount);

    const comBtn = document.createElement('button');
    comBtn.classList.add('btn', 'btn-info', 'comment-button', 'fs-4');
    comBtn.textContent = 'Comment';

    element.appendChild(imgContainer);
    element.appendChild(pokeName);
    element.appendChild(comBtn);

    pokemons.append(element);
  });
}
