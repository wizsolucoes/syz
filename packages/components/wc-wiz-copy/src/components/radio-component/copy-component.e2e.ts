import { newE2EPage } from '@stencil/core/testing';

describe('wiz-copy', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<wiz-copy></wiz-copy>');
    const element = await page.find('wiz-copy');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<wiz-copy></wiz-copy>');
    const component = await page.find('wiz-copy');
    const element = await page.find('wiz-copy >>> div');

  });
});
