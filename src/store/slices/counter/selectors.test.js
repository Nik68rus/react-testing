import { getCounterValue } from './selectors';

describe('Counter selector', () => {
  test('should return counter value', () => {
    expect(getCounterValue({ counter: { value: 0 } })).toBe(0);
  });
});
