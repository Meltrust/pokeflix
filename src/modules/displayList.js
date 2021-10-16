/* eslint-disable linebreak-style */

const pokemons = document.querySelector('.pokemons');
const commentSection = document.querySelector('#comments-section');
const detailSection = document.querySelector('#detail');
const imageSection = document.querySelector('#images');
const commentsCount = document.querySelector('#comments-count');
const limit = 8;
const offset = 1;
let pokeId = 0;
let arrayOfComments = [];
let pokemonArr = [];
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const APP_ID = 'NUi2Jbfvk2pl4lxtwcBf';

async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  return data;
}

async function getPokemons(offset, limit) {
  const promises = [];
  for (let i = offset; i <= offset + limit; i += 1) {
    promises.push(getPokemon(i));
  }
  pokemonArr = await Promise.all(promises);
}

async function createComment() {
  const endpoint = `apps/${APP_ID}/comments?item_id=${pokeId}`;
  const response = await fetch(BASE_URL + endpoint);
  const data = await response.json();
  arrayOfComments = data;
}

async function commentsDOM() {
  await createComment();

  commentSection.innerHTML = '';
  if (arrayOfComments.length === 0) {
    commentsCount.innerHTML = '';
    commentSection.innerHTML = '';
  } else {
    arrayOfComments.forEach((comment) => {
      const p = document.createElement('p');
      p.innerHTML = `${comment.username}: ${comment.comment}`;
      p.className = 'comments';
      commentSection.append(p);
    });
    const count = arrayOfComments.length;
    commentsCount.innerHTML = count;
  }
}

export default async function populateGrid() {
  await getPokemons(offset, limit);

  pokemonArr.forEach((pokemon, index) => {
    const element = document.createElement('div');
    element.classList.add('pokecard', 'd-flex', 'flex-column', 'justify-content-around');
    element.id = index;
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
    comBtn.setAttribute('name', pokemon.name);
    comBtn.setAttribute('onclick', `window.testyFunct( '${pokeImg.src}' )`);
    comBtn.setAttribute('id', pokemon.height);

    element.appendChild(imgContainer);
    element.appendChild(pokeName);
    element.appendChild(comBtn);

    pokemons.append(element);
    element.append(pokeName);
  });
  const btn = document.querySelectorAll('button');

  btn.forEach((ele) => {
    ele.addEventListener('click', (e) => {
      detailSection.innerHTML = '';
      document.querySelector('.bg-popup').style.display = 'flex';
      pokeId = e.target.parentNode.id;
      const title = document.createElement('h6');
      title.innerHTML = `Name: ${ele.name}`;
      detailSection.append(title);

      const height = document.createElement('h6');
      height.innerHTML = `height: ${ele.id}`;
      detailSection.append(height);
      commentsDOM();
    });
  });
}

window.testyFunct = (e) => {
  imageSection.innerHTML = '';
  const img = document.createElement('img');
  img.src = e;
  imageSection.append(img);
};

const close = document.querySelector('.close');

close.addEventListener('click', () => {
  document.querySelector('.bg-popup').style.display = 'none';
});

const username = document.querySelector('#username');
const comments = document.querySelector('#comments');
const submit = document.querySelector('#submit');

async function addcomments(e) {
  e.preventDefault();
  const endpoint = `apps/${APP_ID}/comments`;
  const response = await fetch(BASE_URL + endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: pokeId,
      username: `${username.value}`,
      comment: comments.value,
    }),

  });
  createComment();
  commentsDOM();
  return response;
}

submit.addEventListener('click', (event) => {
  event.preventDefault();
  addcomments(event);
  commentsDOM()
});

// async function createComment() {
//   const endpoint = `apps/${APP_ID}/comments?item_id=${pokeId}`;
//   const response = await fetch(BASE_URL + endpoint);
//   const data = await response.json();
//   arrayOfComments = data;
// }

// async function commentsDOM() {
//   await createComment();

//   commentSection.innerHTML = '';
//   if (arrayOfComments.length === 0) {
//     commentsCount.innerHTML = '';
//     commentSection.innerHTML = '';
//   } else {
//     arrayOfComments.forEach((comment) => {
//       const p = document.createElement('p');
//       p.innerHTML = `${comment.username}: ${comment.comment}`;
//       p.className = 'comments';
//       commentSection.append(p);
//     });
//     const count = arrayOfComments.length;
//     commentsCount.innerHTML = count;
//   }
// }
