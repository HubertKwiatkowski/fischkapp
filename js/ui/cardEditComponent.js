export const getCardEditComponent = () => {
  const cardList = document.getElementById('card-list');
  while (cardList.firstChild) cardList.firstChild.remove();

  const editedCard = document.createElement('div');
  editedCard.classList.add('card-wrapper');

  const flipperDiv = document.createElement('div');
  flipperDiv.classList.add('flipper', 'card-front');
  editedCard.append(flipperDiv);

  const frontCardInfo = document.createElement('div');
  frontCardInfo.classList.add('front-card-info');
  editedCard.append(frontCardInfo);

  const textInput = document.createElement('input');
  textInput.classList.add('edit-value');
  editedCard.append(textInput);

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('button-wrapper');
  editedCard.append(buttonWrapper);

  const leftButton = document.createElement('button');
  const rightButton = document.createElement('button');

  leftButton.classList.add('btn-left');
  leftButton.id = 'btn-cancel';
  leftButton.innerText = 'Cancel';
  rightButton.classList.add('btn-right');
  rightButton.id = 'btn-save';
  rightButton.innerText = 'Save';

  buttonWrapper.append(leftButton);
  buttonWrapper.append(rightButton);

  cardList.append(editedCard);
};
