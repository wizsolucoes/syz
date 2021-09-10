import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocsFaqComponent } from './docs-faq.component';
import { NgSyzFaqModule } from '@wizsolucoes/ng-syz';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared/shared.module';

describe('DocsFaqComponent', () => {
  let component: DocsFaqComponent;
  let fixture: ComponentFixture<DocsFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsFaqComponent ],
      imports: [
        NgSyzFaqModule,
        NoopAnimationsModule,
        SharedModule
      ],
    })
    .compileComponents();
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
