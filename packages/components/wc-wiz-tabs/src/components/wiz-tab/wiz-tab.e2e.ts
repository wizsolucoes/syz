import { newE2EPage } from '@stencil/core/testing';

describe('wiz-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wiz-tab></wiz-tab>');

    const element = await page.find('wiz-tab');
    expect(element).toHaveClass('hydrated');
  });
});
