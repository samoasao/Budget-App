import { BudgetPage } from './app.po';

describe('budget App', () => {
  let page: BudgetPage;

  beforeEach(() => {
    page = new BudgetPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
