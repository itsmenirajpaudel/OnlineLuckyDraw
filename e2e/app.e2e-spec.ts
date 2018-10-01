import { NgluckydrawPage } from './app.po';

describe('ngluckydraw App', function() {
  let page: NgluckydrawPage;

  beforeEach(() => {
    page = new NgluckydrawPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
