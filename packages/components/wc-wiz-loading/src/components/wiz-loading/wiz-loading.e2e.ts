import { newE2EPage } from '@stencil/core/testing';

describe('wiz-loading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wiz-loading></wiz-loading>');

    const element = await page.find('wiz-loading');
    expect(element).toHaveClass('hydrated');
  });
});
