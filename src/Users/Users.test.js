import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';
import Users from './Users';
const axios = require('axios').default;

jest.mock('axios');

describe('Users component', () => {
  let response;

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
        },
      ],
    };
    axios.get.mockReturnValue(response);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render list of users', async () => {
    renderWithRouter(null, '/users');
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
  });

  test('should redirect to user details', async () => {
    renderWithRouter(null, '/users');

    const users = await screen.findAllByTestId('user-item');
    fireEvent.click(users[0]);
    expect(screen.getByTestId('user-details-page')).toBeInTheDocument();
  });
});
