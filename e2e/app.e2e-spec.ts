import { ConnectStreamsAngularPage } from './app.po';

describe('connect-streams-angular App', () => {
  let page: ConnectStreamsAngularPage;

  beforeEach(() => {
    page = new ConnectStreamsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
