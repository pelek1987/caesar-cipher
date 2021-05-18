import caesar13 from './caesar13';

test("throws error when passed argument isn't string", () => {
  expect(() => {
    caesar13(1234);
  }).toThrowError();
});
