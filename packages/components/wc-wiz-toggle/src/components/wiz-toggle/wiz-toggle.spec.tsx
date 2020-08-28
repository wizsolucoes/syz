import { newSpecPage } from '@stencil/core/testing';
import { WizToggle } from './wiz-toggle';

describe('wiz-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WizToggle],
      html: `<wiz-toggle></wiz-toggle>`,
    });

  });

  it('toggle', () => {
    const component = new WizToggle();
    component.toggle(true)
    expect(component.status).not.toBeNull();
    expect(component.status).toEqual(true);

  });
});
