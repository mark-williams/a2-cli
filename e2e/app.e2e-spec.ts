import { A2CliPage } from './app.po';

describe('a2-cli App', function() {
  let page: A2CliPage;

  beforeEach(() => {
    page = new A2CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
