import { getCardList } from './cardList.js';
import { generateCounter } from './cardCounter.js';

export const getCardEdit = (isFront, index, params) => {
  let state = {
    isFront: isFront,
  };
  const leftButton = document.querySelector('.btn-left');
  const rightButton = document.querySelector('.btn-right');
  const dataToChange = document.querySelector('.edit-value');
  const currentCard = params.flashcards[index];
  let readValue = '';
  console.log(params.flashcards[index].front);

  state.isFront
    ? (readValue = currentCard.front)
    : (readValue = currentCard.back);

  dataToChange.value = readValue;

  const cancelButton = () => {
    getCardList(params);
  };

  const saveButton = () => {
    let newValue = document.querySelector('.edit-value').value;

    state.isFront
      ? (currentCard.front = newValue)
      : (currentCard.back = newValue);

    const cardsAmount = params.flashcards.length;
    getCardList(params);
    generateCounter(cardsAmount);
  };

  leftButton.addEventListener('click', cancelButton);
  rightButton.addEventListener('click', saveButton);
};
