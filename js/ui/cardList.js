import { getCardComponent } from './cardComponent.js';

export const getCardList = (params) => {
  const cardList = document.getElementById('card-list');
  console.log(params.flashcards);
  console.log(typeof params.flashcards);
  while (cardList.firstChild) cardList.firstChild.remove();
  const cardsAmount = params.flashcards.length;

  params.flashcards.forEach((flashcard) => {
    console.log(flashcard);
    const card = getCardComponent(flashcard);
    cardList.append(card);
  });
};
