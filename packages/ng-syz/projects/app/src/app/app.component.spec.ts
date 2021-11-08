import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSyzTourModule } from 'projects/ng-syz/src/public-api';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule, NgSyzTourModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the main layout', () => {
    expect(template.querySelector('app-main-layout')).toBeTruthy();
  });
});
