import { getCardComponent } from './cardComponent.js';
import { getCardEdit } from './cardEdit.js';
import { getCardEditComponent } from './cardEditComponent.js';

export const getCardList = (params) => {
  const cardList = document.getElementById('card-list');
  while (cardList.firstChild) cardList.firstChild.remove();

  params.flashcards.forEach((flashcard, index) => {
    let isFront = true;
    const card = getCardComponent(flashcard);
    card.id = index;
    const editCardIcon = card.querySelector('.edit-icon');
    editCardIcon.addEventListener('click', function () {
      if (card.classList.contains('front')) {
        isFront = true;
      } else {
        isFront = false;
      }
      getCardEditComponent();
      getCardEdit(isFront, index, params);
    });
    cardList.append(card);
  });
};
