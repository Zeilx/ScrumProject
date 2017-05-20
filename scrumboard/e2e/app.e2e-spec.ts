import { ScrumboardPage } from './app.po';

describe('scrumboard App', () => {
  let page: ScrumboardPage;

  beforeEach(() => {
    page = new ScrumboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
