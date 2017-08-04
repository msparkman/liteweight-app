import { LiteweightAppPage } from './app.po';

describe('liteweight-app App', () => {
  let page: LiteweightAppPage;

  beforeEach(() => {
    page = new LiteweightAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
