import { getCardComponent } from './cardComponent.js';

export const getCardList = (appState, cardList) => {
  while (cardList.firstChild) cardList.firstChild.remove();

  appState.flashcards.forEach((flashcard, index) => {
    const card = getCardComponent(flashcard, index, cardList, appState);
    cardList.append(card);
  });
};
