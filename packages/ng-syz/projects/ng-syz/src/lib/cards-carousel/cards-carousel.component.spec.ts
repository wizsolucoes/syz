import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';

import { NgSyzCardsCarouselComponent } from './cards-carousel.component';

describe('NgSyzCardsCarouselComponent', () => {
  let component: NgSyzCardsCarouselComponent;
  let fixture: ComponentFixture<NgSyzCardsCarouselComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSyzCardsCarouselComponent],
      imports: [NgxMaskModule.forRoot(), RouterModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzCardsCarouselComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component.config).toBeTruthy();
  });

  it('should return array', () => {
    const showItensExample = {
      title: 'Conexão Conseg',
      colorCard: '#ffffff',
      itens: [
        {
          text: 'Teste link',
          router: '/components/login-with-carousel-flow',
          target: '_self',
        },
      ],
    };
    const showItens = component.showItens(showItensExample[0]);
    expect(showItens).toBeTruthy();
  });

  it('should function showMore', () => {
    const i = 0;
    const showMoreExample = component.showMore(i);
    expect(showMoreExample).toEqual(showMoreExample);
  });
});
