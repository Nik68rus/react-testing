const E2ePage = require('../pageobjects/e2e.page');

describe('My test application', () => {
  it('should toggle message visibility if input text is hello', async () => {
    await E2ePage.open();

    await E2ePage.toggleTitle('hello');
    await expect(E2ePage.message).toBeExisting();
    await E2ePage.toggleBtn.click();
    await expect(E2ePage.message).not.toBeExisting();
  });

  it('should not toggle message visibility if input text is not hello', async () => {
    await E2ePage.open();

    await E2ePage.toggleTitle('hello');
    await expect(E2ePage.message).toBeExisting();
    await E2ePage.toggleBtn.click();
    await expect(E2ePage.message).not.toBeExisting();
  });
});
