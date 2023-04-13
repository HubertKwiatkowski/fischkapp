import { getCardComponent } from './cardComponent.js';

export const getCardList = (appState, cardList, cardsAmount) => {
  while (cardList.firstChild) cardList.firstChild.remove();

  appState.flashcards.forEach((flashcard, index) => {
    const card = getCardComponent(
      flashcard,
      index,
      cardList,
      appState,
      cardsAmount
    );
    if (!cardList.firstChild) {
      cardList.append(card);
    } else {
      cardList.insertBefore(card, cardList.firstChild);
    }
  });
};
