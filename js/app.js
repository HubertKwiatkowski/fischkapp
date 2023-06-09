import { createState } from './data/createState.js';
import { getNewCardComponent } from './ui/newCardComponent.js';
import { getNewCard } from './ui/newCard.js';
import { getCardList } from './ui/cardList.js';
import { generateCounter } from './ui/cardCounter.js';

document.addEventListener('DOMContentLoaded', () => {
  let appState = createState();
  const cardsAmount = appState.flashcards.length;
  const addNewCardButton = document.getElementById('add-card-button');
  const cardList = document.getElementById('card-list');

  const createNewCard = () => {
    getNewCardComponent();
    getNewCard(appState, cardList);
  };

  addNewCardButton.addEventListener('click', createNewCard);

  generateCounter(cardsAmount);
  getCardList(appState, cardList);
});
