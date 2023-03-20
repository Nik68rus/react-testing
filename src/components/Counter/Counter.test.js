import { fireEvent, screen } from '@testing-library/react';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';
import Counter from './Counter';

describe('Counter', () => {
  test('should work correctly', () => {
    renderWithRedux(<Counter />);
    const decBtn = screen.getByTestId('dec-btn');
    const incBtn = screen.getByTestId('inc-btn');
    expect(screen.getByTestId('title')).toHaveTextContent('0');
    fireEvent.click(decBtn);
    expect(screen.getByTestId('title')).toHaveTextContent('-1');
    fireEvent.click(incBtn);
    fireEvent.click(incBtn);
    expect(screen.getByTestId('title')).toHaveTextContent('1');
  });
});
