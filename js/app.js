import { createState } from './data/createState.js';
import { getNewCardComponent } from './ui/newCardComponent.js';
import { getNewCard } from './ui/newCard.js';
import { getCardList } from './ui/cardList.js';
import { generateCounter } from './ui/cardCounter.js';

document.addEventListener('DOMContentLoaded', () => {
  let appState = createState();

  // add new card

  const addNewCardButton = document.getElementById('add-card-button');

  const createNewCard = () => {
    getNewCardComponent();
    getNewCard(appState);
  };

  addNewCardButton.addEventListener('click', createNewCard);

  generateCounter(appState);
  getCardList();
});
