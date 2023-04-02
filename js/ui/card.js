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

  const template = `
  <div class="card-wrapper">
    <div class="flipper flip card-front"></div>
    <div class="edit-icon fade fading">
      <img
        src="src/icon/edit-icon.svg"
        alt="edit-icon"
      />
    </div>
    <p class="text fade fading"></p>
  </div>
  `;

  const card = document.createElement('div');
  card.classList.add('flip');

  card.innerHTML = template.trim();
  card.addEventListener('click', handleToggleCard);
  const text = card.querySelector('.text');
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
