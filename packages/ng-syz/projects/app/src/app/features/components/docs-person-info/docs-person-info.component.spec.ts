import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSyzPersonInfoModule } from '@wizsolucoes/ng-syz';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { DocsPersonInfoComponent } from './docs-person-info.component';

describe('DocsPersonInfoComponent', () => {
  let component: DocsPersonInfoComponent;
  let fixture: ComponentFixture<DocsPersonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSyzPersonInfoModule, SharedTestingModule],
      declarations: [DocsPersonInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsPersonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
