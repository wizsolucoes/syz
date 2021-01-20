import { newE2EPage } from '@stencil/core/testing';

describe('wiz-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wiz-card></wiz-card>');

    const element = await page.find('wiz-card');
    expect(element).toHaveClass('hydrated');
  });
});
