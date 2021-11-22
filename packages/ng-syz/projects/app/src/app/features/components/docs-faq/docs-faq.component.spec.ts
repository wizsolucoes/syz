import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSyzFaqModule } from '@wizsolucoes/ng-syz';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { DocsFaqComponent } from './docs-faq.component';

describe('DocsFaqComponent', () => {
  let component: DocsFaqComponent;
  let fixture: ComponentFixture<DocsFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsFaqComponent],
      imports: [NgSyzFaqModule, SharedTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
