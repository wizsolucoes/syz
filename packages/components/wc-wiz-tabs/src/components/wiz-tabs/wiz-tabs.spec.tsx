import { newSpecPage } from '@stencil/core/testing';
import { WizTabs } from './wiz-tabs';

describe('wiz-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WizTabs],
      html: `<wiz-tabs></wiz-tabs>`,
    });
  });
});
