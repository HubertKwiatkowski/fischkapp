import { getCardComponent } from './cardComponent.js';

export const getCardList = (params) => {
  const cardList = document.getElementById('card-list');
  while (cardList.firstChild) cardList.firstChild.remove();

  params.flashcards.forEach((flashcard) => {
    const card = getCardComponent(flashcard);
    cardList.append(card);
  });
};
