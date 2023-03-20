import counterReducer, { decrement, increment } from './counterSlice';

describe('Counter reducer', () => {
  test('should increment value', () => {
    expect(counterReducer({ value: 0 }, increment())).toStrictEqual({
      value: 1,
    });
  });
  test('should decrement value', () => {
    expect(counterReducer({ value: 5 }, decrement())).toStrictEqual({
      value: 4,
    });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, decrement())).toStrictEqual({
      value: -1,
    });
    expect(counterReducer(undefined, increment())).toStrictEqual({
      value: 1,
    });
  });
});
