//source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffleArray<T>(array: T[]): T[] {
  const newArr = array.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export function splitEqually<T>(array: T[], n: number): T[][] {
  const arr = array.slice();
  const chunks = Array(n)
    .fill(0)
    .map(() => []);
  let i = 0;
  while (array.length - i > array.length % n) {
    chunks[i % n].push(arr.shift());
    i++;
  }
  return chunks;
}
