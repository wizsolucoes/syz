import { newSpecPage } from '@stencil/core/testing';
import { WizTab } from './wiz-tab';

describe('wiz-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WizTab],
      html: `<wiz-tab></wiz-tab>`,
    });
  });


  it('not null', () => {
    const component = new WizTab();
    expect(component.active).not.toBeNull();
    expect(component.type).not.toBeNull();
    expect(component.eventValue).not.toBeNull();

    component.open();
  });




});
