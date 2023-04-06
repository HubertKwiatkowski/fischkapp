import { createState } from '../data/createState.js';
import { getCardComponent } from './cardComponent.js';

let appState = createState();

const cardList = document.getElementById('card-list');
const card = getCardComponent(appState.flashcards[0]);

export const getCardList = () => {
  while (cardList.firstChild) cardList.firstChild.remove();

  cardList.append(card);
};
