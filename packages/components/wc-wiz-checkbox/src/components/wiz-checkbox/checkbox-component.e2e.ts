import { newE2EPage } from '@stencil/core/testing';

describe('wiz-checkbox', () => {

  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<wiz-checkbox></wiz-checkbox>');
    const element = await page.find('wiz-checkbox');
    expect(element).toHaveClass('hydrated');
  });


});
