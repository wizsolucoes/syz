import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { TourService } from './services/tour.service';
import { NgSyzTourComponent } from './tour.component';


xdescribe('TourComponent', () => {
  let component: NgSyzTourComponent;
  let fixture: ComponentFixture<NgSyzTourComponent>;
  let mockTourService: jasmine.SpyObj<TourService>;
  // let mockWindowService: jasmine.SpyObj<WindowService>;

  beforeEach(async () => {
    mockTourService = jasmine.createSpyObj('TourService', [
      // 'tourCurrentStepStream',
      'preventBackdropFromAdvancing',
      'nextStep'
    ]);

    // mockWindowService = jasmine.createSpyObj('WindowService', [

    // ]);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatButtonModule],
      declarations: [ NgSyzTourComponent ],
      providers: [
        { provide: TourService, useValue: mockTourService },
        // { provide: WindowService, useValue: mockWindowService },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageLoaded after view init', fakeAsync(() => {
    component.ngAfterViewInit();
    // expect(component.maiorBreakPoint).toBe(true);
  }));
});
