import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSyzCheckListStatusModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';
import { DocsChecklistStatusComponent } from './docs-checklist-status.component';

describe('DocsChecklistStatusComponent', () => {
  let component: DocsChecklistStatusComponent;
  let fixture: ComponentFixture<DocsChecklistStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsChecklistStatusComponent],
      imports: [
        NgSyzCheckListStatusModule,
        SharedModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsChecklistStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
