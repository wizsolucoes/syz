import { newE2EPage } from '@stencil/core/testing';

describe('wiz-autocomplete', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wiz-autocomplete></wiz-autocomplete>');

    const element = await page.find('wiz-autocomplete');
    expect(element).toHaveClass('hydrated');
  });
});
