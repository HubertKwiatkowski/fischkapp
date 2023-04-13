export const addCard = (previousState, newCard) => {
  const updatedState = {
    ...previousState,
    flashcards: [...previousState.flashcards, newCard],
  };

  return updatedState;
};

export const removeCard = (previousState, indexToRemove) => {
  const updatedFlashcards = previousState.flashcards.filter(
    (_, index) => index !== indexToRemove
  );

  const updatedState = {
    ...previousState,
    flashcards: updatedFlashcards,
  };

  return updatedState;
};
