import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgSyzCheckListStatusComponent } from './checklist-status.component';

describe('NgSyzCheckListStatusComponent', () => {
  let component: NgSyzCheckListStatusComponent;
  let fixture: ComponentFixture<NgSyzCheckListStatusComponent>;

  beforeEach(
    waitForAsync(async () => {
      await TestBed.configureTestingModule({
        declarations: [NgSyzCheckListStatusComponent],
        imports: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzCheckListStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
