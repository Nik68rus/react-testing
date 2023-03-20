import { fireEvent, screen } from '@testing-library/react';
import App from '../../App';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('should be rendered', () => {
    renderWithRouter(<App />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  test('should change pages', () => {
    renderWithRouter(<Navbar />);
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    const usersLink = screen.getByTestId('users-link');

    fireEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    fireEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    fireEvent.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });
});
