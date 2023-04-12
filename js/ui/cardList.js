import { getCardComponent } from './cardComponent.js';

export const getCardList = (params) => {
  const cardList = document.getElementById('card-list');
  while (cardList.firstChild) cardList.firstChild.remove();

  params.flashcards.forEach((flashcard, index) => {
    const card = getCardComponent(flashcard);
    card.id = index;
    cardList.append(card);
  });
};
