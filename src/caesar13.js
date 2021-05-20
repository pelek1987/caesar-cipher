const caesar13 = (text) => {
  if (typeof text !== 'string') {
    throw new Error('Given argument has to be string');
  }
  if (text === '') {
    throw new Error('Given string has to be not empty');
  }

  const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';

  const letters = [...text];

  const encryptedLetters = [];

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const indexOfLowerCase = lowerCaseAlphabet.indexOf(letter);
    const indexOfUpperCase = upperCaseAlphabet.indexOf(letter);

    if (indexOfUpperCase !== -1) {
      encryptedLetters[i] = upperCaseAlphabet[(indexOfUpperCase + 13) % 26];
    } else if (indexOfLowerCase !== -1) {
      encryptedLetters[i] = lowerCaseAlphabet[(indexOfLowerCase + 13) % 26];
    } else {
      encryptedLetters[i] = letter;
    }
  }
  const encryptedText = encryptedLetters.join('');
  return encryptedText;
};

export default caesar13;
