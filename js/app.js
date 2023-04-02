import { createState } from './data/createState.js';
import { getCardComponent, createNewCardComponent } from './ui/card.js';
import { addCard } from './data/actions.js';

document.addEventListener('DOMContentLoaded', () => {
  // Example of how we can create app state responsible for holding data
  let appState = createState();

  // Example of how we can create UI component using reusable function
  const newCardData = { front: 'Good morning', back: 'Dzień dobry' };

  const card = getCardComponent(newCardData);

  // Example of how we can add card to our state
  const updatedAppState = addCard(appState, newCardData);
  appState = updatedAppState;
  card.getElementsByClassName('text').innerHTML = newCardData.front;

  const cardList = document.getElementById('card-list');

  // Example of how to display created card in our UI
  cardList.append(card);
  const cardCountState = appState.flashcards.length;

  const cardCounter = document.getElementById('card-counter');
  const counter = document.createTextNode(cardCountState);
  const getCardTotalNumber = () => {
    cardCounter.appendChild(counter);
  };
  getCardTotalNumber();
});
