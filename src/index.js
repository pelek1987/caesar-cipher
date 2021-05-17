const caesar13 = (text) => {
  if (typeof text !== 'string') {
    throw new Error('Given argument has to be string');
  }
  if (text === '') {
    throw new Error('Given string has to be not empty');
  }
};
