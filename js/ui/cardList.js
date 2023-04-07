import { getCardComponent } from './cardComponent.js';

const cardList = document.getElementById('card-list');

export const getCardList = (params) => {
  const card = getCardComponent(params.flashcards[0]);

  while (cardList.firstChild) cardList.firstChild.remove();

  cardList.append(card);
};
