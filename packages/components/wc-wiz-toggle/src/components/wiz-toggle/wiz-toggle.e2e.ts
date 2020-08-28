import { newE2EPage } from '@stencil/core/testing';

describe('wiz-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wiz-toggle></wiz-toggle>');

    const element = await page.find('wiz-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
