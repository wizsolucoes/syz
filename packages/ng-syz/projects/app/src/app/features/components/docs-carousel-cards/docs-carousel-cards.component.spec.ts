import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSyzCarouselCardsModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';


import { DocsCarouselCardsComponent } from './docs-carousel-cards.component';

describe('DocsCarouselCardsComponent', () => {
  let component: DocsCarouselCardsComponent;
  let fixture: ComponentFixture<DocsCarouselCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSyzCarouselCardsModule, SharedModule],
      declarations: [DocsCarouselCardsComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsCarouselCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
