/* eslint-disable linebreak-style */

const pokemons = document.querySelector('.pokemons');

const limit = 8;
const offset = 1;
const likesUrl = ('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NUi2Jbfvk2pl4lxtwcBf/likes/');

async function getLikes() {
  const response = await fetch(likesUrl);
  const obj = await response.json();

  return obj;
}
getLikes();

async function postLikes(element = {}) {
  const response = await fetch(likesUrl, {
    method: 'POST',
    body: JSON.stringify(element),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.status;
}

let pokemonArr = [];

async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();

  return data;
}

// async function getPokemons(offset, limit) {
//   for (let i = offset; i <= offset + limit; i += 1) {
//     pokemonArr.push(await getPokemon(i));
//   }
// }

async function getPokemons(offset, limit) {
  const promises = [];
  for (let i = offset; i <= offset + limit; i += 1) {
    promises.push(getPokemon(i));
  }
  pokemonArr = await Promise.all(promises);
}

function elementsCounter(e = []) {
  return e.length;
}

export default async function populateGrid() {
  await getPokemons(offset, limit);

  const likesArr = await getLikes();

  pokemonArr.forEach((pokemon) => {
    const element = document.createElement('div');
    element.classList.add('pokecard', 'd-flex', 'flex-column', 'justify-content-around', 'position-relative');
    element.setAttribute('name', `${pokemon.name}`);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('pokeimg-container');

    const pokeImg = document.createElement('img');
    pokeImg.src = pokemon.sprites.other['official-artwork'].front_default;
    imgContainer.appendChild(pokeImg);

    const nameLikesContainer = document.createElement('div');
    nameLikesContainer.classList.add('d-flex', 'flex-row', 'justify-content-center', 'align-items-center', 'name-likes-container', 'position-absolute');

    imgContainer.appendChild(nameLikesContainer);

    const pokeName = document.createElement('p');
    pokeName.classList.add('poke-name', 'mb-0', 'fs-4');

    const pokeLikesContainer = document.createElement('div');
    pokeLikesContainer.classList.add('me-2', 'fs-3');

    const pokeLikesIcon = document.createElement('i');
    pokeLikesIcon.classList.add('bi', 'bi-heart', 'fs-3');
    pokeLikesIcon.id = `likeBtn${pokemon.id}`;
    pokeLikesIcon.setAttribute('onclick', `window.addLike( ${pokemon.id} )`);

    const pokeLikesCount = document.createElement('div');
    const pokeLikesRetreiveCountElem = likesArr.findIndex((e) => e.item_id === `item${pokemon.id}`);

    pokeLikesCount.id = `likeCnt${pokemon.id}`;
    pokeLikesCount.classList.add('fs-3', 'mb-1');

    if (pokeLikesRetreiveCountElem === -1 || null || undefined) {
      pokeLikesCount.textContent = 0;
    } else {
      pokeLikesCount.textContent = likesArr[pokeLikesRetreiveCountElem].likes;
    }
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
  const pokeCount = document.getElementById('pokeCounter');
  pokeCount.textContent = `Pokemons Count: ${elementsCounter(pokemonArr)}`;
}

window.addLike = (id = '') => {
  const obj = { item_id: `item${id}` };
  postLikes(obj).then(() => {
    const likeBtn = document.querySelector(`#likeBtn${id}`);
    likeBtn.classList.replace('bi-heart', 'bi-heart-fill');
    likeBtn.classList.add('text-danger');
    likeBtn.setAttribute('onclick', '');
    const likesNumber = document.querySelector(`#likeCnt${id}`);
    likesNumber.innerHTML = `${Number.parseInt(likesNumber.innerHTML, 10) + 1}`;
  });
};
