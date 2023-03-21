const Page = require('./page');

class UsersPage extends Page {
  get loadingTitle() {
    return $('#loading');
  }

  get usersList() {
    return $('#users-list');
  }

  get usersItems() {
    return browser.react$$('User');
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (error) {
      throw new Error('Cant load users!');
    }
  }

  async deleteUser() {
    try {
      const usersCount = await this.usersItems.length;
      if (!usersCount) {
        throw new Error('Not found!');
      }
      await this.usersItems[0].$('#delete-btn').click();
      const usersCountAfterDelete = await this.usersItems.length;

      if (usersCount - usersCountAfterDelete !== 1) {
        throw new Error('Deletion incorrect');
      }
    } catch (error) {
      throw new Error('Cant delete user. ' + error.message);
    }
  }
  open() {
    return super.open('users-test');
  }
}

module.exports = new UsersPage();
