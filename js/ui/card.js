export const createCardComponent = (params) => {
  let state = {
    isFront: true,
  };

  const handleToggleCard = () => {
    state = { ...state, isFront: !state.isFront };
    card.innerText = state.isFront ? params.front : params.back;
  };

  const card = document.createElement('div');
  // const card = document.insertAdjecentHTML(
  //   'afterbegin',
  //   `<div
  //         class="card-front"
  //         id="card-front-edit"
  //       >
  //         <div class="edit-icon">
  //           <img
  //             src="src/icon/edit-icon.svg"
  //             alt="edit-icon"
  //           />
  //         </div>
  //         <p>card name placeholder that can be very, very long</p>
  //       </div>`
  // );
  card.classList.add('card');
  card.addEventListener('click', handleToggleCard);
  card.innerText = params.front;

  return card;
};
