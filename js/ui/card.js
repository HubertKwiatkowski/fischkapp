export const createCardComponent = (params) => {
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
  text.innerText = params.back;

  return card;
};
