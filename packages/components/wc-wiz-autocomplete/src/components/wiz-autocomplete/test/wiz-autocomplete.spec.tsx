import { newSpecPage } from '@stencil/core/testing';
import { WizAutocomplete } from '../wiz-autocomplete';

describe('wiz-autocomplete', () => {
  const list = `[{"email":"hugorosello@wizsolucoes.com.br",
    "name":"Hugo dos Santos Ricchino Rosello"
  },
  {
    "email":"thaischaves@wizsolucoes.com.br",
    "name":"Thais Pimentel Chaves"
  },
  {
    "email":"mayumeheldt@wizsolucoes.com.br",
    "name":"Mayume Heldt"
  }]`


  it('renders', async () => {
    const page = await newSpecPage({
      components: [WizAutocomplete],
      html: `<wiz-autocomplete></wiz-autocomplete>`,
    });
  });


  it('parseMyArrayProp', () => {
    const component = new WizAutocomplete();
    expect(component.data).not.toBeNull();
    component.data = list;
    component.parseMyArrayProp(list)
  });



  it('setInformation', () => {
    const component = new WizAutocomplete();
    component.setInformation('return');
    expect(component.itemSelected).not.toBeNull();

  });


  // it('search', () => {
  //   const event = {
  //     preventDefault() {},
  //     target: { value: 'Santos Hugo' }
  //   };
  //   const component = new WizAutocomplete();
  //   component.dataFilter = JSON.parse(list);
  //   component.searchItem = 'name'
  //   component.searchResult = 'name'

  //   component.search(event.target.value);
  // });


  it('clearValue', () => {
    const component = new WizAutocomplete();
    component.clearValue();
  });


});
