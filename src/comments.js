const pokemons = document.querySelector('.pokemons');
const popup = document.querySelector('.pop-up')
const pl = document.querySelector('.placeholder')
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

    element.appendChild(imgContainer);
    element.appendChild(pokeName);
    element.appendChild(comBtn);

    pokemons.append(element);
    pl.append(pokeName)


  });
  const title = document.querySelectorAll('.poke-name')
  const btn = document.querySelectorAll('button')
  for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', ()=>{
      document.querySelector('.bg-popup').style.display = "flex";
      console.log(pokemonArr[i].name)
      title.textContent = pokemonArr[i].name
    })
  }

}

const close = document.querySelector('.close')

close.addEventListener("click", () => {
  document.querySelector('.bg-popup').style.display = "none";
})


fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(res => {console.log(res.text())})


var elements = document.querySelectorAll('.pokecard')
console.log(elements)

var item;
for(var i = 0; i < elements.length; i++) {
  item += elements[i].id;
}

// console.log(item)
var item_id = 1;

const base = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NUi2Jbfvk2pl4lxtwcBf/comments?item_id=${item_id}`


  const username = document.querySelector("#username")
  const comments = document.querySelector("#comments")
  const submit = document.querySelector("#submit")
  
  
let array_of_comments = []

async function createComment() {
    let response = await fetch(base);
    let data = await response.json();
    array_of_comments = data;
    // console.log(data)
    console.log(array_of_comments);
    update(array_of_comments) 

    array_of_comments.forEach((comment) => {
      const p = document.createElement('p');
      p.innerHTML = `${comment.user}: ${comment.comment}`;
      p.className = 'comments';
      popup.append(p);
    });
}

function update(commentsArr) {
  window.localStorage.setItem('commentsArr', JSON.stringify(commentsArr));
  console.log(commentsArr)
}
  
  async function addcomments(e) {
    e.preventDefault();
    const response = await fetch(base, {
      method: 'POST', 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: `${username.value}`,
        comment: comments.value,
      }),
  
    });
    console.log(response)
    createComment()
  }



  submit.addEventListener('click', addcomments);

