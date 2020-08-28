import { newSpecPage } from '@stencil/core/testing';
import { WizModal } from './wiz-modal';

describe('wiz-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WizModal],
      html: `<wiz-modal></wiz-modal>`,
    });
  });


  it('stylization', async () => {
    const comp = new WizModal();
    comp.size = 'lg';
    comp.stylization();
  });
});
