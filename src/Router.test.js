import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import { renderWithRouter } from './tests/helpers/renderWithRouter';

describe('Router', () => {
  test('should go to Main and About pages', async () => {
    renderWithRouter(<Navbar />);
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    fireEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    fireEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
  test('should redirect to NotFoundPage', async () => {
    render(
      <MemoryRouter initialEntries={['/errorPath']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('notfound-page')).toBeInTheDocument();
  });
});
