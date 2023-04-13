import { getCardList } from './cardList.js';
import { generateCounter } from './cardCounter.js';

export const getCardEdit = (
  isFront,
  index,
  params,
  cardList,
  leftButton,
  rightButton,
  dataToChange
) => {
  let state = {
    isFront: isFront,
  };
  const currentCard = params.flashcards[index];
  let readValue = '';

  state.isFront
    ? (readValue = currentCard.front)
    : (readValue = currentCard.back);

  dataToChange.value = readValue;

  const cancelButton = () => {
    getCardList(params, cardList);
  };

  const saveButton = () => {
    let newValue = dataToChange.value;

    state.isFront
      ? (currentCard.front = newValue)
      : (currentCard.back = newValue);

    const cardsAmount = params.flashcards.length;
    getCardList(params, cardList);
    generateCounter(cardsAmount);
  };

  leftButton.addEventListener('click', cancelButton);
  rightButton.addEventListener('click', saveButton);
};
