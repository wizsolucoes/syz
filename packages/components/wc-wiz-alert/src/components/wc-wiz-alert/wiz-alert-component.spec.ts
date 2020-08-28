import { newSpecPage } from '@stencil/core/testing';
import { WizAlert } from './wiz-alert-component';




describe('wiz-alert', () => {

  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WizAlert],
      html: '<wiz-alert></wiz-alert>'
    });
  });



  it('mapColor', () => {
    const component = new WizAlert();
    component.mapColor();
  });


  it('componentDidLoad', () => {
    const component = new WizAlert();
    component.componentDidLoad();
    if (component.time) {
      setTimeout(function () {
        expect(component.isShow).toEqual(false);
      }, 5000);
    }
  });


  it('close', async () => {

    const component = new WizAlert();
    expect(component.isShow).toBe(true);
    component.close();
    expect(component.isShow).toBe(false);
  });


});
