import { newSpecPage } from '@stencil/core/testing';
import { WizTooltip } from './wiz-tooltip';
import { Component } from '@stencil/core';

describe('wiz-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WizTooltip],
      html: `<wiz-tooltip></wiz-tooltip>`,
    });
  });
});


it('mouseEnter()', async () => {
  const comp = new WizTooltip();
  comp.mouseEnter();
  expect(comp.open).toEqual(true);

 });


it('mouseLeave()', async () => {
  const comp = new WizTooltip();
  comp.mouseLeave();
  expect(comp.open).toEqual(false);

 });


 it('loadshadown()', async () => {
  const comp = new WizTooltip();
  comp.bgColor = '#fff'
  comp.loadshadown();

 });
