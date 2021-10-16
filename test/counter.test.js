/* eslint-disable linebreak-style */

import elementsCounter from '../src/modules/counter';

const arrObjsPoks = [
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Pikachu' },
  { id: 3, name: 'Ivysaur', weight: '50' },
  { id: 4, name: 'Charizard' },
  { id: 5, name: 'Blastoise' },
  { id: 6, name: 'Wartortle', abilities: ['run', 'attack'] },
  { id: 7, name: 'Squirtle' },
  { id: 8, name: 'Charmander' },
  { id: 9, name: 'Venusaur' },
];

const arrayLikes = [
  { username: 'Marco', comment: 'Nice!' },
  { username: 'Mark', comment: 'Exp max' },
  { username: 'Andrew', comment: 'I like this guy' },
  { username: 'Miguel', comment: 'Max evolution?' },
  { username: 'Tobias', comment: 'How much exp?' },
  { username: 'Carl', comment: 'Hello everyone!' },
];

it('Counts elements of an array of pokemon objects', () => {
  expect(elementsCounter(arrObjsPoks)).toBe(9);
});

it('Returns the correct number of elements', () => {
  expect(elementsCounter(arrObjsPoks)).not.toBe(5);
});

it('Counts inside of object properties', () => {
  expect(elementsCounter(arrObjsPoks[5].abilities)).toBe(2);
});

it('Counts the elements of the comments section', () => {
  expect(elementsCounter(arrayLikes)).toBe(6);
});

it('Returns the correct number of elements', () => {
  expect(elementsCounter(arrayLikes)).not.toBe(0);
});
