import TextRotator from './TextRotator';

test('cycles index', () => {
  const testArr = ['one', 'two', 'three', 'four'];
  let testIndex = 2;
  testIndex = TextRotator.cycleIndex(testIndex, testArr);
  expect(testIndex).toBe(3);
  testIndex = TextRotator.cycleIndex(testIndex, testArr);
  expect(testIndex).toBe(0);
});
