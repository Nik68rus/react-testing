import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/slices/counter/counterSlice';
import { getCounterValue } from '../../store/slices/counter/selectors';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1 data-testid="title">{value}</h1>
      <button data-testid="dec-btn" onClick={onDecrement}>
        -
      </button>
      <button data-testid="inc-btn" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
