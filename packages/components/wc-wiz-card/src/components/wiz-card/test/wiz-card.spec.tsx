import { newSpecPage } from '@stencil/core/testing';
import { WizCard } from '../wiz-card';

describe('wiz-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WizCard]
    });

  });
});
