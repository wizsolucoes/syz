import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared/shared.module';
import { DocsTimelineComponent } from './docs-timeline.component';
import { NgSyzTimelineModule } from '@wizsolucoes/ng-syz';

describe('DocsTimelineComponent', () => {
  let component: DocsTimelineComponent;
  let fixture: ComponentFixture<DocsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NoopAnimationsModule,
        NgSyzTimelineModule
      ],
      declarations: [ DocsTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
