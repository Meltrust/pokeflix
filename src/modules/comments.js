const commentSection = document.querySelector('#comments-section');
const commentsCount = document.querySelector('#comments-count');
let arrayOfComments = [];
const pokeId = 0;

const close = document.querySelector('.close');
close.addEventListener('click', () => {
  document.querySelector('.bg-popup').style.display = 'none';
});

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
  console.log(arrayOfComments);
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

submit.addEventListener('click', (event) => {
  event.preventDefault();
  addcomments(event);
});

export default { commentsDOM };