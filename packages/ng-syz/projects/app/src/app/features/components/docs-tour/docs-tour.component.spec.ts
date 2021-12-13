import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSyzTourModule } from '@wizsolucoes/ng-syz';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { TourService } from 'projects/ng-syz/src/lib/tour/services/tour.service';
import { DocsTourComponent } from './docs-tour.component';

describe('DocsTourComponent', () => {
  let component: DocsTourComponent;
  let fixture: ComponentFixture<DocsTourComponent>;
  let mockTourService: jasmine.SpyObj<TourService>;

  beforeEach(async () => {
    mockTourService = jasmine.createSpyObj('TourService', ['startTour']);

    await TestBed.configureTestingModule({
      imports: [NgSyzTourModule, SharedTestingModule],
      declarations: [DocsTourComponent],
      providers: [{ provide: TourService, useValue: mockTourService }],
    }).compileComponents();
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
