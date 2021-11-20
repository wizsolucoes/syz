import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSyzCardsCarouselModule } from '@wizsolucoes/ng-syz';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { DocsCarouselCardsComponent } from './docs-cards-carousel.component';

describe('DocsCarouselCardsComponent', () => {
  let component: DocsCarouselCardsComponent;
  let fixture: ComponentFixture<DocsCarouselCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgSyzCardsCarouselModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        SharedTestingModule,
      ],
      declarations: [DocsCarouselCardsComponent],
    }).compileComponents();
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
