import { shuffleArray, splitEqually } from './Logic';

declare global {
  interface Number {
    times: () => number[];
  }
}

const times = (n: number) =>
  Array(n)
    .fill(0)
    .map((_, i) => i);

const randInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

describe('Game Logic', () => {
  const initArray = () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arr = initArray();
  beforeEach(() => {
    arr = initArray();
  });
  describe('shuffle array', () => {
    it('should return a new array', () => {
      const suffled = shuffleArray(arr);
      expect(suffled).not.toBe(arr);
    });
    it('should not effect the original array', () => {
      shuffleArray(arr);
      expect(arr).toStrictEqual(initArray());
    });
    it('should shuffle evenly within accepted range', () => {
      const counter = arr.map((_, i) => Array(arr.length).fill(0));

      const n = 10000;
      for (let i = 0; i < n; i++) {
        const shuffledArr = shuffleArray(arr);
        shuffledArr.forEach((value, index) => {
          counter[index][value]++;
        });
      }

      const frequencyArr = counter.flatMap((positionArr) => positionArr.map((count) => count / n));
      const allInRange = frequencyArr.every((count) => count < 0.13 && count > 0.07);

      expect(allInRange).toBe(true);
    });
  });

  describe.only('splitEqually', () => {
    it.each(times(3).map(() => randInRange(2, arr.length)))(
      'should split the array to an equaly sized of chunks for n < array.length',
      (n) => {
        const chunks = splitEqually(arr, n);
        console.log(n);
        console.log(chunks);
        const expectedArrayLength = Math.floor(arr.length / n);
        expect(chunks.every((hand) => hand.length === expectedArrayLength)).toBeTruthy();
      },
    );
    it.each(times(3).map(() => randInRange(2, arr.length)))('should return n={%i} chunks', (n) => {
      const chunks = splitEqually(arr, n);
      expect(chunks.length).toEqual(n);
    });
  });
});
