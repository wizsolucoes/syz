import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSyzCheckListStatusComponent } from './checklist-status.component';

describe('NgSyzCheckListStatusComponent', () => {
  let component: NgSyzCheckListStatusComponent;
  let fixture: ComponentFixture<NgSyzCheckListStatusComponent>;

  beforeEach(
    waitForAsync(async () => {
      await TestBed.configureTestingModule({
        declarations: [NgSyzCheckListStatusComponent],
        imports: [RouterTestingModule],
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
