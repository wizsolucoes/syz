import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgSyzPersonInfoModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';
import { DocsPersonInfoComponent } from './docs-person-info.component';

describe('DocsPersonInfoComponent', () => {
  let component: DocsPersonInfoComponent;
  let fixture: ComponentFixture<DocsPersonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSyzPersonInfoModule, SharedModule, NoopAnimationsModule],
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
