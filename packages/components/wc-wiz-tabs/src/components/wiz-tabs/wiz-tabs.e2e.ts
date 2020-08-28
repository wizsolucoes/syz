import { newE2EPage } from '@stencil/core/testing';

describe('wiz-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wiz-tabs></wiz-tabs>');

    const element = await page.find('wiz-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
