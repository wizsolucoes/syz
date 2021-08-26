import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { NgSyzDialogModalComponent } from './dialog-modal.component';

describe('NgSyzDialogModalComponent', () => {
  let component: NgSyzDialogModalComponent;
  let fixture: ComponentFixture<NgSyzDialogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSyzDialogModalComponent ],
      imports:[ MatDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
