import { getCardEditComponent } from './cardEditComponent.js';

export const getCardComponent = (flashcard, index, cardList, appState) => {
  let state = {
    isFront: true,
  };

  const handleToggleCard = () => {
    state = { ...state, isFront: !state.isFront };
    card.classList.toggle('front');
    card.classList.toggle('back');

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
        ? flashcard.front
        : flashcard.back;
    }, 250);
  };

  const card = document.createElement('div');
  card.classList.add('front', 'card-wrapper');
  card.id = index;

  const flipperDiv = document.createElement('div');
  flipperDiv.classList.add('flipper', 'card-front');
  card.append(flipperDiv);

  const iconWrapper = document.createElement('div');
  iconWrapper.classList.add('fading', 'edit-icon');

  const iconImg = document.createElement('img');
  card.append(iconWrapper);
  iconImg.src = 'src/icon/edit-icon.svg';
  iconImg.alt = 'edit-icon';
  iconImg.addEventListener('click', function () {
    getCardEditComponent(state.isFront, appState, cardList, flashcard, index);
  });
  iconWrapper.append(iconImg);

  const text = document.createElement('p');
  card.append(text);
  if (state.isFront) text.id = 'front';
  text.classList.add('fading', 'text');

  card.addEventListener('click', handleToggleCard);
  text.innerText = flashcard.front;

  return card;
};
