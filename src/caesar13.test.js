import caesar13 from './caesar13';

describe('Function caesar13', () => {
  test("throws error when passed argument isn't string", () => {
    expect(() => {
      caesar13(1234);
    }).toThrowError();
  });

  test('throws error when passed argument is empty string', () => {
    expect(() => {
      caesar13('');
    }).toThrowError();
  });

  test('moves letter in alphabet by 13 letters', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letterA = alphabet[0];
    const letterN = alphabet[13];
    expect(caesar13(letterA)).toBe(letterN);
  });

  test('returns "n" when "a" passed', () => {
    expect(caesar13('a')).toBe('n');
  });

  test('is case sensitive', () => {
    expect(caesar13('Ab')).toBe('No');
  });

  test("digits aren't  encrypted", () => {
    expect(caesar13('1')).toBe('1');
  });
});
