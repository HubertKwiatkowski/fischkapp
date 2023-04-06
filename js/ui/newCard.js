export const getNewCardComponent = () => {
  let state = {
    isFront: true,
  };

  const nextButton = () => {
    if (textInput.value !== '') {
      handleToggleCard();
      setTimeout(() => {
        leftButton.id = 'btn-back';
        leftButton.innerText = 'Back';
        rightButton.id = 'btn-save';
        rightButton.innerText = 'Save';
      }, 250);
      leftButton.addEventListener('click', backButton);
      rightButton.removeEventListener('click', nextButton);
      const frontValue = document.createElement('p');
      frontValue.classList.add('front-value');
      const imgWrapper = document.createElement('div');
      imgWrapper.classList.add('btn-delete');
      const iconImg = document.createElement('img');
      iconImg.src = 'src/icon/trash-icon.svg';
      iconImg.alt = 'trash-icon';
      imgWrapper.append(iconImg);
      frontCardInfo.append(frontValue);
      frontCardInfo.append(imgWrapper);
    }
  };

  const backButton = () => {
    handleToggleCard();
    leftButton.id = 'btn-cancel';
    setTimeout(() => {
      leftButton.id = 'btn-cancel';
      leftButton.innerText = 'Cancel';
      rightButton.id = 'btn-next';
      rightButton.innerText = 'Next';
    }, 250);
    leftButton.removeEventListener('click', backButton);
    rightButton.addEventListener('click', nextButton);
    rightButton.removeEventListener('click', saveButton);

    while (frontCardInfo.firstChild) frontCardInfo.firstChild.remove();
  };

  const saveButton = () => {
    rightButton.addEventListener('click', nextButton);
    leftButton.removeEventListener('click', backButton);
  };

  const handleToggleCard = () => {
    state = { ...state, isFront: !state.isFront };

    if (newCard.querySelector('.flip')) {
      newCard.querySelector('.flipper').classList.toggle('flip');
      newCard.querySelector('.flipper').classList.toggle('flipped');
    }

    newCard.querySelector('.flipper').classList.toggle('flip');

    const list = newCard.querySelectorAll('.fading');
    for (const element of list) {
      if (element.classList.contains('fade')) {
        element.classList.toggle('fade');
        element.classList.toggle('faded');
      }

      element.classList.toggle('fade');
    }
  };

  const newCard = document.createElement('div');
  newCard.classList.add('card-wrapper');

  const flipperDiv = document.createElement('div');
  flipperDiv.classList.add('flipper', 'card-front');
  newCard.append(flipperDiv);

  const frontCardInfo = document.createElement('div');
  frontCardInfo.classList.add('front-card-info');
  newCard.append(frontCardInfo);

  const textInput = document.createElement('input');
  textInput.classList.add('new-value', 'fading');
  newCard.append(textInput);

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('button-wrapper');
  newCard.append(buttonWrapper);

  const leftButton = document.createElement('button');

  const rightButton = document.createElement('button');

  if (state.isFront) {
    leftButton.classList.add('btn-left', 'fading');
    leftButton.id = 'btn-cancel';
    leftButton.innerText = 'Cancel';
    rightButton.classList.add('btn-right', 'fading');
    rightButton.id = 'btn-next';
    rightButton.innerText = 'Next';
  }

  buttonWrapper.append(leftButton);
  buttonWrapper.append(rightButton);

  rightButton.addEventListener('click', nextButton);

  return newCard;
};
