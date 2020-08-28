import { newE2EPage } from '@stencil/core/testing';

describe('wiz-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wiz-modal></wiz-modal>');

    const element = await page.find('wiz-modal');
    expect(element).toHaveClass('hydrated');
  });
});
