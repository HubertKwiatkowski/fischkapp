export const generateCounter = (cardsAmount) => {
  const cardCounter = document.getElementById('card-counter');
  while (cardCounter.firstChild) cardCounter.firstChild.remove();

  const counter = document.createTextNode(cardsAmount);
  const getCardTotalNumber = () => {
    cardCounter.appendChild(counter);
  };
  getCardTotalNumber();
};
