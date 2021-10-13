import logos from './assets/logos.png'
import './styles/styles.css';


const base_url = "https://pokeapi.co/api/v2/pokemon/"
const pokemons = document.querySelector('.pokemons')
const title = document.querySelector(".title")

let pokemon1 = [];

async function getpokemon() {
  let response = await fetch(base_url);
  let data = await response.json();
  pokemon1 = data.results;

  pokemon1.forEach((pokemon, index) => {
    const li = document.createElement('li');
    const btn = document.createElement("button");
    btn.innerText = 'comment';
    li.innerHTML = `${pokemon.name}: ${pokemon.url}`;
    li.className = 'list_item';
    li.id = index;
    pokemons.append(li);
    li.append(btn)
    
  }); 
  const btn = document.querySelectorAll('button')
  for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', ()=>{
      document.querySelector('.bg-popup').style.display = "flex";
      title.innerText = i;
     
    })
  }
}

const close = document.querySelector('.close')

close.addEventListener("click", () => {
  document.querySelector('.bg-popup').style.display = "none";
})

getpokemon()








