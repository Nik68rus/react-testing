import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

describe('Render', () => {
  test('renders content', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const helloWorldElement = screen.getByText(/hello world/i);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('renders content 2', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const helloWorldElement = screen.queryByText(/hello1/i);
    expect(helloWorldElement).toBeNull();
  });

  test('should render async data', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const dataEl = await screen.findByText(/data/i, undefined, {
      timeout: 5000,
    });
    expect(dataEl).toBeInTheDocument();
    expect(dataEl).toHaveStyle({ color: 'red' });
  });

  test('should toggle element visibility', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('should handle input', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.getByTestId('value-el')).toHaveTextContent('');
    fireEvent.input(input, { target: { value: '123123' } });
    // userEvent.type(input, '123123');
    expect(screen.getByTestId('value-el')).toHaveTextContent('123123');
  });
});
