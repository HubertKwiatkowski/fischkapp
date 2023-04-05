export const getCardComponent = (params) => {
  let state = {
    isFront: true,
  };

  const handleToggleCard = () => {
    state = { ...state, isFront: !state.isFront };

    if (card.querySelector('.flip')) {
      card.querySelector('.flipper').classList.toggle('flip');
      card.querySelector('.flipper').classList.toggle('flipped');
    }

    card.querySelector('.flipper').classList.toggle('flip');

    const list = card.querySelectorAll('.fading');
    for (const element of list) {
      if (element.classList.contains('fade')) {
        element.classList.toggle('fade');
        element.classList.toggle('faded');
      }

      element.classList.toggle('fade');
    }
    setTimeout(() => {
      card.querySelector('.text').innerText = state.isFront
        ? params.front
        : params.back;
    }, 250);
  };

  const card = document.createElement('div');
  card.classList.add('card-wrapper');

  const flipperDiv = document.createElement('div');
  flipperDiv.classList.add('flipper', 'card-front');
  card.append(flipperDiv);

  const iconWrapper = document.createElement('div');
  iconWrapper.classList.add('fading', 'card-icon');

  const iconImg = document.createElement('img');
  card.append(iconWrapper);
  iconImg.src = 'src/icon/edit-icon.svg';
  iconImg.alt = 'edit-icon';
  iconWrapper.append(iconImg);

  const text = document.createElement('p');
  card.append(text);
  text.classList.add('fading', 'text');

  card.addEventListener('click', handleToggleCard);
  text.innerText = params.front;

  return card;
};

export const createNewCardComponent = () => {
  let state = {
    isFront: true,
  };

  // const cancelButton = () => {};

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
    while (frontCardInfo.firstChild) frontCardInfo.firstChild.remove();
  };
  const nextButton = () => {
    handleToggleCard();
    setTimeout(() => {
      leftButton.id = 'btn-back';
      leftButton.innerText = 'Back';
      rightButton.id = 'btn-save';
      rightButton.innerText = 'Save';
    }, 250);
    rightButton.removeEventListener('click', nextButton);
    leftButton.addEventListener('click', backButton);
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
  };

  // const saveButton = () => {};

  const handleToggleCard = () => {
    state = { ...state, isFront: !state.isFront };

    if (addCard.querySelector('.flip')) {
      addCard.querySelector('.flipper').classList.toggle('flip');
      addCard.querySelector('.flipper').classList.toggle('flipped');
    }

    addCard.querySelector('.flipper').classList.toggle('flip');

    const list = addCard.querySelectorAll('.fading');
    for (const element of list) {
      if (element.classList.contains('fade')) {
        element.classList.toggle('fade');
        element.classList.toggle('faded');
      }

      element.classList.toggle('fade');
    }
  };

  const addCard = document.createElement('div');
  addCard.classList.add('card-wrapper');

  const flipperDiv = document.createElement('div');
  flipperDiv.classList.add('flipper', 'card-front');
  addCard.append(flipperDiv);

  const frontCardInfo = document.createElement('div');
  frontCardInfo.classList.add('front-card-info');
  addCard.append(frontCardInfo);

  const textInput = document.createElement('input');
  textInput.classList.add('new-value', 'fading');
  addCard.append(textInput);

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('button-wrapper');
  addCard.append(buttonWrapper);

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

  return addCard;
};
