export const generateCounter = (params) => {
  const cardCounter = document.getElementById('card-counter');
  while (cardCounter.firstChild) cardCounter.firstChild.remove();

  const counter = document.createTextNode(params);
  const getCardTotalNumber = () => {
    cardCounter.appendChild(counter);
  };
  getCardTotalNumber();
};
