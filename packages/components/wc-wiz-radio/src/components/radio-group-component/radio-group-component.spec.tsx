import { newSpecPage } from '@stencil/core/testing';
import { RadioGroupComponent } from './radio-group-component';

describe('radio-group-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent],
      html: `<radio-group-component></radio-group-component>`,
    });
    expect(page.root).toEqualHtml(`
      <radio-group-component></radio-group-component>
    `);
  });
});
