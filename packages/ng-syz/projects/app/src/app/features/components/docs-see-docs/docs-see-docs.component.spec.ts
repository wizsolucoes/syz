import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSyzCheckListStatusModule } from '@wizsolucoes/ng-syz';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { DocsSeeDocsComponent } from './docs-see-docs.component';

describe('DocsChecklistStatusComponent', () => {
  let component: DocsSeeDocsComponent;
  let fixture: ComponentFixture<DocsSeeDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsSeeDocsComponent],
      imports: [NgSyzCheckListStatusModule, SharedTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsSeeDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
