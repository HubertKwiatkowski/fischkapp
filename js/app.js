import { createState } from './data/createState.js';
import { getNewCardComponent } from './ui/newCardComponent.js';
import { getNewCard } from './ui/newCard.js';
import { getCardList } from './ui/cardList.js';
import { generateCounter } from './ui/cardCounter.js';
import { getCardComponent } from './ui/cardComponent.js';

document.addEventListener('DOMContentLoaded', () => {
  let appState = createState();
  const cardsAmount = appState.flashcards.length;
  const addNewCardButton = document.getElementById('add-card-button');

  const createNewCard = () => {
    getNewCardComponent();
    getNewCard(appState);
  };

  addNewCardButton.addEventListener('click', createNewCard);

  generateCounter(cardsAmount);
  getCardList(appState);

  const editCardIcons = document.querySelectorAll('.edit-icon');

  editCardIcons.forEach((icon) => {
    icon.addEventListener('click', function () {
      const card = icon.closest('.card-wrapper');
      const index = card.id;
      const cardToEdit = appState.flashcards[index];
      getNewCardComponent();
      getNewCard(appState, index);
    });
  });
});
