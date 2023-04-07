import { getCardComponent } from './cardComponent.js';

export const getCardList = (params) => {
  const cardList = document.getElementById('card-list');
  const card = getCardComponent(params.flashcards[0]);

  while (cardList.firstChild) cardList.firstChild.remove();
  cardList.append(card);
};
