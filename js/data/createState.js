export const createState = () => {
  const onSave = () => {
    console.log(flashcards);
  };
  return {
    flashcards: [
      { front: 'mlot', back: 'hammer' },
      // { front: 'topor', back: 'axe' },
      // { front: 'miecz', back: 'sword' },
    ],
  };
};
