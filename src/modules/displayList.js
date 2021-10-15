/* eslint-disable linebreak-style */
/* eslint-disable no-await-in-loop */
import { commentsDOM } from './comments.js';

const pokemons = document.querySelector('.pokemons');
const limit = 8;
const offset = 1;
let poke_id = 0;

const detailSection = document.querySelector('#detail')
const imageSection = document.querySelector('#images')

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
    comBtn.setAttribute('name', pokemon.name)
    comBtn.setAttribute('onclick', `window.testyFunct( '${pokeImg.src}' )`);
    comBtn.setAttribute('id', pokemon.height);

    element.appendChild(imgContainer);
    element.appendChild(pokeName);
    element.appendChild(comBtn);

    pokemons.append(element);
  });

  const btn = document.querySelectorAll('button')
  
  for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', (e)=>{
      detailSection.innerHTML = "";
      document.querySelector('.bg-popup').style.display = "flex";
      poke_id = e.target.parentNode.id
      const title = document.createElement('h6')
      title.innerHTML = "Name: " + btn[i].name;
      detailSection.append(title)

      const height = document.createElement('h6')
      height.innerHTML = "height: " + btn[i].id;
      detailSection.append(height)
      commentsDOM()
      
      console.log(poke_id)
    })
  }
}

window.testyFunct = (e) => {
  imageSection.innerHTML = "";
  const img = document.createElement('img');
  img.src = e;
  imageSection.append(img);
};





