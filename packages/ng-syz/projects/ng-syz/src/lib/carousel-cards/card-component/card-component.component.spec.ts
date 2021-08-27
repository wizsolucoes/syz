import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponentComponent } from './card-component.component';

describe('CardComponentComponent', () => {
  let component: CardComponentComponent;
  let fixture: ComponentFixture<CardComponentComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponentComponent);
    component = fixture.componentInstance;
    component.slides = [{
      title: '',
      itens: []
    }]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    let i = 1;
    let showMore = component.showMore(i)
    expect(showMore).toBeTruthy();
  });

  fit('should return array', () => {
    let showItensExample = {
      title: 'Conexão Conseg',
      colorCard: '#ffffff',
      itens: [
        {
          text: 'Teste link',
          router: '/components/login-with-carousel-flow',
          target: '_self',
        }
      ]
    }
    let showItens = component.showItens([showItensExample])
    expect(showItens).toEqual(showItensExample[0]);
  });
});
