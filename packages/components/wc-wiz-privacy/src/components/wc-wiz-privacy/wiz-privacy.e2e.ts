import { newE2EPage } from '@stencil/core/testing';

describe('wiz-privacy', () => {

  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<wiz-privacy></wiz-privacy>');
    const element = await page.find('wiz-privacy');
    expect(element).toHaveClass('hydrated');
  });


});
