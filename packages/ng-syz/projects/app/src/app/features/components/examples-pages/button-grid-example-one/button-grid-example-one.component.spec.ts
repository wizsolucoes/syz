import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSyzButtonGridModule } from '@wizsolucoes/ng-syz';
import { ButtonGridExampleOneComponent } from './button-grid-example-one.component';

describe('ButtonGridExampleOneComponent', () => {
  let component: ButtonGridExampleOneComponent;
  let fixture: ComponentFixture<ButtonGridExampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonGridExampleOneComponent],
      imports: [NgSyzButtonGridModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGridExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
