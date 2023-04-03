export const getCardComponent = (params) => {
  let state = {
    isFront: true,
  };

  const handleToggleCard = () => {
    state = { ...state, isFront: !state.isFront };

    card.querySelector('.flipper').classList.toggle('flip');
    card.querySelector('.flipper').classList.toggle('flipped');
    const list = card.querySelectorAll('.fading');
    for (const element of list) {
      element.classList.toggle('fade');
      element.classList.toggle('faded');
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
  flipperDiv.classList.add('flipper', 'flip', 'card-front');
  card.append(flipperDiv);
  const iconWrapper = document.createElement('div');
  iconWrapper.classList.add('edit-icon', 'fade', 'fading');
  const iconImg = document.createElement('img');
  card.append(iconWrapper);
  iconImg.src = 'src/icon/edit-icon.svg';
  iconImg.alt = 'edit-icon';
  iconWrapper.append(iconImg);
  const text = document.createElement('p');
  card.append(text);
  text.classList.add('text', 'fade', 'fading');

  card.addEventListener('click', handleToggleCard);
  text.innerText = params.front;

  return card;
};

export const createNewCardComponent = (params) => {
  let state = {
    isFront: true,
  };

  const handleToggleCard = () => {
    state = { ...state, isFront: !state.isFront };
    card.querySelector('.text').innerText = state.isFront
      ? params.front
      : params.back;
  };

  const template = `
  <div
    class="card-front"
  >
    <div class="edit-icon">
      <img
        src="src/icon/edit-icon.svg"
        alt="edit-icon"
      />
    </div>
    <p class="text"></p>
  </div>
  `;

  const card = document.createElement('div');

  card.innerHTML = template.trim();
  card.addEventListener('click', handleToggleCard);
  const text = card.querySelector('.text');
  text.innerText = params.front;

  return card;
};
