import { newE2EPage } from '@stencil/core/testing';

describe('wiz-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wiz-breadcrumb></wiz-breadcrumb>');

    const element = await page.find('wiz-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
