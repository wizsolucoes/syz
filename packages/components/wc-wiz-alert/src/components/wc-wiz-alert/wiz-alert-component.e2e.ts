import { newE2EPage } from '@stencil/core/testing';

describe('wiz-alert', () => {

  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<wiz-alert></wiz-alert>');
    const element = await page.find('wiz-alert');
    expect(element).toHaveClass('hydrated');
  });


});
