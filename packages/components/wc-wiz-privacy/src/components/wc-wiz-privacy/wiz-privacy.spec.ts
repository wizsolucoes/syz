import { newSpecPage } from '@stencil/core/testing';
import { WizPrivacy } from './wiz-privacy';




describe('wiz-privacy', () => {

  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WizPrivacy],
      html: '<wiz-privacy></wiz-privacy>'
    });
  });


  it('componentWillLoad', () => {
    const component = new WizPrivacy();
    component.componentWillLoad();
  });


  it('close', async () => {

    const component = new WizPrivacy();
    expect(component.isShow).toBe(true);
    component.close();
    expect(component.isShow).toBe(false);
  });


});
