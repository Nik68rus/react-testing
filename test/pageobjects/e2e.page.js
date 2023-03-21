const Page = require('./page');

class E2ePage extends Page {
  get input() {
    return $('#search');
  }

  get toggleBtn() {
    return $('#toggle');
  }

  get message() {
    return $('#message');
  }

  async toggleTitle(text) {
    await this.input.setValue(text);
    await this.toggleBtn.click();
  }

  open() {
    return super.open('e2e');
  }
}

module.exports = new E2ePage();
