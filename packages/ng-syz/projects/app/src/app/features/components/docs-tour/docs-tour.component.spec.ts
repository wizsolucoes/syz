import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DocsTourComponent } from './docs-tour.component';
import { NgSyzTourModule } from '@wizsolucoes/ng-syz';
import { TourService } from 'projects/ng-syz/src/lib/tour/services/tour.service';
import { SharedModule } from '../../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DocsTourComponent', () => {
  let component: DocsTourComponent;
  let fixture: ComponentFixture<DocsTourComponent>;
  let mockTourService: jasmine.SpyObj<TourService>;

  beforeEach(async () => {

    mockTourService = jasmine.createSpyObj('TourService', [
      'startTour'
    ]);

    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, NgSyzTourModule, SharedModule, NoopAnimationsModule ],
      declarations: [ DocsTourComponent ],
      providers: [
        { provide: TourService, useValue: mockTourService },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
