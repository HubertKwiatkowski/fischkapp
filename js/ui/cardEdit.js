import { getCardList } from './cardList.js';
import { generateCounter } from './cardCounter.js';
import { removeCard } from '../data/actions.js';

export const getCardEdit = (
  isFront,
  appState,
  flashcard,
  cardList,
  leftButton,
  rightButton,
  textInput,
  removeButtonWrapper,
  index
) => {
  let state = {
    isFront: isFront,
  };

  const currentCard = flashcard;
  let readValue = '';

  state.isFront
    ? (readValue = currentCard.front)
    : (readValue = currentCard.back);

  textInput.value = readValue;

  const cancelButton = () => {
    getCardList(appState, cardList);
  };

  const saveButton = () => {
    let newValue = textInput.value;

    state.isFront
      ? (currentCard.front = newValue)
      : (currentCard.back = newValue);

    const cardsAmount = appState.flashcards.length;
    getCardList(appState, cardList);
    generateCounter(cardsAmount);
  };

  const trashIcon = () => {
    getCardList(appState, cardList);
    const updatedAppState = removeCard(appState, index);
    console.log(updatedAppState);
    appState.flashcards = updatedAppState.flashcards;
    const cardsAmount = appState.flashcards.length;
    generateCounter(cardsAmount);
  };

  leftButton.addEventListener('click', cancelButton);
  rightButton.addEventListener('click', saveButton);
  removeButtonWrapper.addEventListener('click', trashIcon);
};
