import { Electiva2Taller2Page } from './app.po';

describe('electiva2-taller2 App', function() {
  let page: Electiva2Taller2Page;

  beforeEach(() => {
    page = new Electiva2Taller2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
