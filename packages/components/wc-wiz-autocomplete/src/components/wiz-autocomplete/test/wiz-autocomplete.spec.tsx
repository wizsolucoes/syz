import { newSpecPage } from '@stencil/core/testing';
import { WizAutocomplete } from '../wiz-autocomplete';

describe('wiz-autocomplete', () => {
  const list = `[
    {
      "email":"john.doe@test.com.br",
      "name":"John Doe"
    }​,
    {​
      "email":"aldrey.doe@test.com.br",
      "name":"Aldrey Doe"
    }​,
    {​
      "email":"potter.doe@test.com.br",
      "name":"Potter Doe"
    }
  ]`
  let component: WizAutocomplete;

  beforeEach(() => {
    component = new WizAutocomplete();
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [WizAutocomplete],
      html: `<wiz-autocomplete></wiz-autocomplete>`,
    });
  });


  it('parseMyArrayProp', () => {
    expect(component.data).not.toBeNull();
    component.data = JSON.stringify(list);
    component.parseMyArrayProp(JSON.stringify(list))
  });


  it('setInformation', () => {
    component.setInformation('return', {
      email:"aldrey.doe@test.com.br",
      name:"Aldrey Doe"
    }, "Aldrey Doe");
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
    component.clearValue();
  });


});
