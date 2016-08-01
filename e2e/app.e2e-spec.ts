import { RecognitionPage } from './app.po';

describe('recognition App', function() {
  let page: RecognitionPage;

  beforeEach(() => {
    page = new RecognitionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
