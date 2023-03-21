const UsersPage = require('../pageobjects/users.page');

describe('Users page', () => {
  it('should load data', async () => {
    await UsersPage.loadData();
  });

  it('should delete user', async () => {
    await UsersPage.loadData();
    await UsersPage.deleteUser();
  });
});
