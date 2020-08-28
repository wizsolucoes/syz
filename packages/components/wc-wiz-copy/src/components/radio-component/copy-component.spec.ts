import { newSpecPage } from '@stencil/core/testing';
import { CopyComponent } from './copy-component';


it('should render my component', async () => {
  const page = await newSpecPage({
    components: [CopyComponent],
    html: `<wiz-copy></wiz-copy>`,
  });
});



it('not to be null', async () => {
  const component = new CopyComponent();

  expect(component.value).not.toBeNull();

});

