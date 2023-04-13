import { getCardList } from './cardList.js';
import { addCard } from '../data/actions.js';
import { generateCounter } from './cardCounter.js';

export const getNewCard = (appState, cardList) => {
  const newCardData = { front: '', back: '' };
  const leftButton = document.querySelector('.btn-left');
  const rightButton = document.querySelector('.btn-right');

  const cancelButton = () => {
    if (!newCardData.front) document.querySelector('.new-value').value = '';
    getCardList(appState, cardList);
  };

  const nextButton = () => {
    if (document.querySelector('.new-value').value !== '') {
      leftButton.removeEventListener('click', cancelButton);
      leftButton.addEventListener('click', backButton);
      rightButton.removeEventListener('click', nextButton);
      rightButton.addEventListener('click', saveButton);
      newCardData.front = document.querySelector('.new-value').value;
      document.querySelector('.new-value').value = '';
      if (newCardData.back)
        document.querySelector('.new-value').value = newCardData.back;
      const frontCardInfo = document.querySelector('.front-value');
      frontCardInfo.innerText = newCardData.front;

      const deleteButton = document.querySelector('.btn-delete');
      deleteButton.addEventListener('click', cancelButton);
    }
  };

  const backButton = () => {
    leftButton.addEventListener('click', cancelButton);
    leftButton.removeEventListener('click', backButton);
    rightButton.addEventListener('click', nextButton);
    rightButton.removeEventListener('click', saveButton);
    newCardData.back = document.querySelector('.new-value').value;
    if (newCardData.front)
      document.querySelector('.new-value').value = newCardData.front;
  };

  const saveButton = () => {
    if (document.querySelector('.new-value').value) {
      newCardData.back = document.querySelector('.new-value').value;
      const updatedAppState = addCard(appState, newCardData);
      appState.flashcards = updatedAppState.flashcards;

      document.querySelector('.new-value').value = '';
      leftButton.removeEventListener('click', backButton);
      rightButton.removeEventListener('click', saveButton);

      const cardsAmount = appState.flashcards.length;

      getCardList(appState, cardList);
      generateCounter(cardsAmount);
    }
  };

  leftButton.addEventListener('click', cancelButton);
  rightButton.addEventListener('click', nextButton);
};
