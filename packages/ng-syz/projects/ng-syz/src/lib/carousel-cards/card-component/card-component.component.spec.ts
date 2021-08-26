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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    let showMore = component.showMore(false)
    expect(showMore).toBeTruthy();
  });

  it('should return array', () => {
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
    expect(showItens).toEqual([showItensExample]);
  });
});
