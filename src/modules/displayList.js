/* eslint-disable linebreak-style */

import { getLikes, postLikes } from './likes';
import elementsCounter from './counter';

const pokemons = document.querySelector('.pokemons');
const commentSection = document.querySelector('#commentSection');
const detailSection = document.querySelector('#detail');
const detailSection2 = document.querySelector('#detail2');
const imageSection = document.querySelector('#images');
const commentsCount = document.querySelector('#comments-count');
const limit = 8;
const offset = 1;
let pokeId = 0;
let arrayOfComments = [];
let pokemonArr = [];
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const APP_ID = 'dXTjle5wBhwiX6PKtZxO';

function hideSpinnerNav() {
  document.getElementById('spinner')
    .style.display = 'none';
}

function hideFooter() {
  document.getElementById('footer')
    .style.display = 'none';
}

function showFooter() {
  document.getElementById('footer')
    .style.display = 'block';
}

async function getPokemon(id) {
  hideFooter();
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  if (response) {
    hideSpinnerNav();
    showFooter();
  }
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
  if (arrayOfComments.length === 0 || arrayOfComments.error) {
    commentsCount.innerHTML = '0';
    commentSection.innerHTML = '';
  } else {
    arrayOfComments.forEach((comment) => {
      const comContainer = document.createElement('div');
      const b = document.createElement('b');
      const comContent = document.createElement('span');
      b.innerHTML = `${comment.username}: `;
      comContent.innerHTML = `${comment.comment}`;

      comContainer.append(b, comContent);
      comContainer.classList.add('mb-2');
      commentSection.append(comContainer);
    });
    const count = arrayOfComments.length;
    commentsCount.innerHTML = count;
  }
}

export default async function populateGrid() {
  await getPokemons(offset, limit);
  const likesArr = await getLikes();

  pokemonArr.forEach((pokemon, index) => {
    const element = document.createElement('div');
    element.classList.add('pokecard', 'd-flex', 'flex-column', 'justify-content-around', 'position-relative');
    element.setAttribute('name', `${pokemon.name}`);
    element.id = index;
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
    const pokeLikesRetreiveCountId = likesArr.findIndex((e) => e.item_id === `item${pokemon.id}`);

    pokeLikesCount.id = `likeCnt${pokemon.id}`;
    pokeLikesCount.classList.add('fs-3', 'mb-1');

    if (pokeLikesRetreiveCountId === -1 || null || undefined) {
      pokeLikesCount.textContent = 0;
    } else {
      pokeLikesCount.textContent = likesArr[pokeLikesRetreiveCountId].likes;
    }
    pokeName.textContent = pokemon.name;

    pokeLikesContainer.appendChild(pokeLikesIcon);

    nameLikesContainer.append(pokeLikesContainer, pokeLikesCount);

    const comBtn = document.createElement('button');
    comBtn.textContent = 'Comment';
    comBtn.classList.add('btn', 'btn-info', 'comment-button', 'fs-4');
    comBtn.setAttribute('name', pokemon.name);
    comBtn.setAttribute('data-bs-toggle', 'modal');
    comBtn.setAttribute('data-bs-target', '#mainPopup');

    comBtn.setAttribute('onclick', `window.testyFunct( '${pokeImg.src}' )`);
    comBtn.setAttribute('id', index);
    comBtn.setAttribute('height', pokemon.height);

    element.appendChild(imgContainer);
    element.appendChild(pokeName);
    element.appendChild(comBtn);

    pokemons.append(element);
  });
  const pokeCount = document.getElementById('pokeCounter');
  pokeCount.textContent = `Pokemons Count: ${elementsCounter(pokemonArr)}`;

  const btn = document.querySelectorAll('button');

  btn.forEach((ele) => {
    ele.addEventListener('click', (e) => {
      detailSection.innerHTML = '';
      detailSection2.innerHTML = '';

      pokeId = e.target.parentNode.id;
      const { height } = pokemonArr[pokeId];
      const { weight } = pokemonArr[pokeId];
      const exp = pokemonArr[pokeId].base_experience;
      const title = document.createElement('p');

      const heightDom = document.createElement('p');
      const weightDom = document.createElement('p');
      const expDom = document.createElement('p');
      const modalName = document.getElementById('modalTitle');
      modalName.innerHTML = `${ele.name}`;

      title.innerHTML = `Name: ${ele.name}`;
      heightDom.innerHTML = `Height: ${height}`;
      weightDom.innerHTML = `Weight: ${weight}`;
      expDom.innerHTML = `Experience: ${exp}`;
      detailSection.append(title, heightDom);
      detailSection2.append(weightDom, expDom);
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

const username = document.querySelector('#username');
const comments = document.querySelector('#comments');
const submit = document.querySelector('#submit');

async function addcomments(e) {
  if (!username.value || !comments.value) {
    const errPlacing = document.getElementById('valErr');

    errPlacing.innerHTML = ('Please fill both fields \n');

    setTimeout(() => errPlacing.removeChild(errPlacing.childNodes[0]), 2000);

    return false;
  }
  e.preventDefault();
  const spinComment = document.getElementById('spinnerCom');
  spinComment.classList.toggle('d-none');
  const submitComButton = document.getElementById('submit');
  submitComButton.classList.toggle('d-none');

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
  if (response) {
    spinComment.classList.toggle('d-none');
    submitComButton.classList.toggle('d-none');
  }
  createComment();
  username.value = '';
  comments.value = '';
  commentsDOM();
  return response;
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

submit.addEventListener('click', (event) => {
  event.preventDefault();
  addcomments(event);
});
