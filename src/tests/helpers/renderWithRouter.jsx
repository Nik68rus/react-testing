import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import AppRouter from '../../router/AppRouter';
import { store } from '../../store/store';

export const renderWithRouter = (component, initialPath = '/') => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialPath]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
