import { newE2EPage } from '@stencil/core/testing';

describe('wiz-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wiz-tooltip></wiz-tooltip>');

    const element = await page.find('wiz-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
