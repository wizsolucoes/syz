import { newSpecPage } from '@stencil/core/testing';
import { WizLoading } from './wiz-loading';

describe('wiz-loading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WizLoading],
      html: `<wiz-loading></wiz-loading>`,
    });

  });

  it('renders', async () => {
    const component = new WizLoading();
    expect(component.type).not.toBeNull();
  });


});
