export const generateCounter = (appState) => {
  const cardCountState = appState.flashcards.length;

  const cardCounter = document.getElementById('card-counter');
  while (cardCounter.firstChild) cardCounter.firstChild.remove();

  const counter = document.createTextNode(cardCountState);
  const getCardTotalNumber = () => {
    cardCounter.appendChild(counter);
  };
  getCardTotalNumber();
};
