import { newSpecPage } from '@stencil/core/testing';
import { WizBreadcrumb } from './wiz-breadcrumb';

describe('wiz-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WizBreadcrumb],
      html: `<wiz-breadcrumb></wiz-breadcrumb>`,
    });

  });


  it('buildRouterBreadcrumb()', async () => {
   const comp = new WizBreadcrumb()
   comp.url = 'https://github.com/wizsolucoes/wc-wiz-checkbox/blob/master/src/components/my-component/checkbox-component.spec.ts'
   comp.buildRouterBreadcrumb();

  });
});
