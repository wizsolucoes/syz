import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSyzStatusTimelineModule } from '@wizsolucoes/ng-syz';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { DocsTimelineComponent } from './docs-status-timeline.component';

describe('DocsTimelineComponent', () => {
  let component: DocsTimelineComponent;
  let fixture: ComponentFixture<DocsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedTestingModule, NgSyzStatusTimelineModule],
      declarations: [DocsTimelineComponent],
    }).compileComponents();
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
