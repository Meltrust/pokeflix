const pokemons = document.querySelector('.pokemons');
const commentSection = document.querySelector('#comments-section');
const detailSection = document.querySelector('#detail');
const imageSection = document.querySelector('#images');
const commentsCount = document.querySelector('#comments-count');
const limit = 8;
const offset = 1;
let pokeId = 0;
let arrayOfComments = [];
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

  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', (e) => {
      detailSection.innerHTML = '';
      document.querySelector('.bg-popup').style.display = 'flex';
      pokeId = e.target.parentNode.id;
      const title = document.createElement('h6');
      title.innerHTML = `Name: ${btn[i].name}`;
      detailSection.append(title);

      const height = document.createElement('h6');
      height.innerHTML = `height: ${btn[i].id}`;
      detailSection.append(height);
      commentsDOM();
    });
  }
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

const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const APP_ID = 'NUi2Jbfvk2pl4lxtwcBf';

const username = document.querySelector('#username');
const comments = document.querySelector('#comments');
const submit = document.querySelector('#submit');

async function createComment() {
  const endpoint = `apps/${APP_ID}/comments?item_id=${pokeId}`;
  const response = await fetch(BASE_URL + endpoint);
  const data = await response.json();
  arrayOfComments = data;
}

async function addcomments(e) {
  e.preventDefault();
  console.log(e);
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
  console.log(response);
  createComment();
}

async function commentsDOM() {
  await createComment();

  commentSection.innerHTML = '';
  arrayOfComments.forEach((comment) => {
    const p = document.createElement('p');
    p.innerHTML = `${comment.username}: ${comment.comment}`;
    p.className = 'comments';
    commentSection.append(p);
  });
  const count = arrayOfComments.length;
  commentsCount.innerHTML = count;
}

submit.addEventListener('click', (event) => {
  event.preventDefault();
  addcomments(event);
  commentsDOM()
});
