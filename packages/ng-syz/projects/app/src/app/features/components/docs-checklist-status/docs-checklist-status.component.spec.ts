import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSyzCheckListStatusModule } from '@wizsolucoes/ng-syz';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { DocsChecklistStatusComponent } from './docs-checklist-status.component';

describe('DocsChecklistStatusComponent', () => {
  let component: DocsChecklistStatusComponent;
  let fixture: ComponentFixture<DocsChecklistStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsChecklistStatusComponent],
      imports: [NgSyzCheckListStatusModule, SharedTestingModule],
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
