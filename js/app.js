import { createState } from './data/createState.js';
import { getCardComponent, createNewCardComponent } from './ui/card.js';
import { addCard } from './data/actions.js';

document.addEventListener('DOMContentLoaded', () => {
  // display cards
  // temporary show 2 fixed cards

  let appState = createState();

  const cardData = { front: 'Good morning', back: 'Dzień dobry' };
  const secondCardData = { front: 'bad morning', back: 'kiepski poranek' };

  const card = getCardComponent(cardData);
  const secondCard = getCardComponent(secondCardData);

  const newCardData = { front: '', back: '' };

  const cardList = document.getElementById('card-list');

  cardList.append(card);
  cardList.append(secondCard);

  // add new card

  const addNewCardButton = document.getElementById('add-card-button');

  const addACard = () => {
    const addNewCard = createNewCardComponent();
    while (cardList.firstChild) cardList.firstChild.remove();
    cardList.append(addNewCard);
    const leftButton = addNewCard.querySelector('.btn-left');
    const rightButton = addNewCard.querySelector('.btn-right');

    const cancelButton = () => {
      while (cardList.firstChild) cardList.firstChild.remove();
      cardList.append(card);
      cardList.append(secondCard);
      addNewCard.querySelector('.new-value').value = '';
      console.log(newCardData);
    };

    const backButton = () => {
      leftButton.addEventListener('click', cancelButton);
      leftButton.removeEventListener('click', backButton);
      rightButton.addEventListener('click', nextButton);
      rightButton.removeEventListener('click', saveButton);
      newCardData.back = addNewCard.querySelector('.new-value').value;
      if (newCardData.front)
        addNewCard.querySelector('.new-value').value = newCardData.front;
      console.log(newCardData);
    };

    const nextButton = () => {
      leftButton.removeEventListener('click', cancelButton);
      leftButton.addEventListener('click', backButton);
      rightButton.removeEventListener('click', nextButton);
      rightButton.addEventListener('click', saveButton);
      addNewCard.querySelector('.new-value').value = '';
      if (newCardData.back)
        addNewCard.querySelector('.new-value').value = newCardData.back;
      newCardData.front = addNewCard.querySelector('.new-value').value;
      console.log(newCardData);
    };

    const saveButton = () => {
      console.log(newCardData);
      const backWord = addNewCard.querySelector('.new-value').value;
      console.log(backWord);
      while (cardList.firstChild) cardList.firstChild.remove();
      cardList.append(card);
      cardList.append(secondCard);

      const updatedAppState = addCard(appState, newCardData);
      appState = updatedAppState;

      addNewCard.querySelector('.new-value').value = '';
      leftButton.removeEventListener('click', backButton);
      rightButton.removeEventListener('click', saveButton);
      generateCounter();
    };

    leftButton.addEventListener('click', cancelButton);
    rightButton.addEventListener('click', nextButton);
  };

  addNewCardButton.addEventListener('click', addACard);

  // count total cards

  const generateCounter = () => {
    const cardCountState = appState.flashcards.length;

    const cardCounter = document.getElementById('card-counter');
    while (cardCounter.firstChild) cardCounter.firstChild.remove();

    const counter = document.createTextNode(cardCountState);
    const getCardTotalNumber = () => {
      cardCounter.appendChild(counter);
    };
    getCardTotalNumber();
  };

  generateCounter();
});
