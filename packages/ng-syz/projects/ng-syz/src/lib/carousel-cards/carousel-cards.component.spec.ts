import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMaskModule } from 'ngx-mask';

import { NgSyzCarouselCardsComponent } from './carousel-cards.component';

describe('NgSyzPersonInfoComponent', () => {
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

  describe('should display person data', () => {
    it('should diplay user name', () => {
      const nameElement = template.querySelector('[data-test=name]');
      expect(nameElement.innerHTML).toEqual(component.person.name);
    });

    it('should diplay user email', () => {
      const emailElement = template.querySelector('[data-test=email]');
      expect(emailElement.innerHTML).toEqual(component.person.email);
    });
  });
});
