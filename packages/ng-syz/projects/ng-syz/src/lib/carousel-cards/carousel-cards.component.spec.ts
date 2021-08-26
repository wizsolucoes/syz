import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMaskModule } from 'ngx-mask';

import { NgSyzCarouselCardsComponent } from './carousel-cards.component';

describe('NgSyzCarouselCardsComponent', () => {
  let component: NgSyzCarouselCardsComponent;
  let fixture: ComponentFixture<NgSyzCarouselCardsComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSyzCarouselCardsComponent],
      imports: [NgxMaskModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzCarouselCardsComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
