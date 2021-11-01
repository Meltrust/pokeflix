/* eslint-disable linebreak-style */

const likesUrl = ('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dXTjle5wBhwiX6PKtZxO/likes/');

// GET likes
export async function getLikes() {
  const response = await fetch(likesUrl);
  const obj = await response.json();

  return obj;
}

// POST likes
export async function postLikes(element = {}) {
  const response = await fetch(likesUrl, {
    method: 'POST',
    body: JSON.stringify(element),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.status;
}
