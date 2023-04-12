export const addCard = (previousState, newCard) => {
  const updatedState = {
    ...previousState,
    flashcards: [...previousState.flashcards, newCard],
  };

  return updatedState;
};
