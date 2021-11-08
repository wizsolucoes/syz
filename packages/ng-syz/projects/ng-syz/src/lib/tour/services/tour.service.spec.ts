import { fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Orientation } from '../models/orientation';
import { TourService } from './tour.service';
import { WindowService } from './window.service';

describe('TourService', () => {
  let service: TourService;
  let mockWindowService: jasmine.SpyObj<WindowService>;

  const tourTeste = {
    id: 'tour-teste',
    preventBackdropFromAdvancing: true,
    skipCallback: () => { },
    completeCallback: () => { },
    tourStep: [
        {
            title: 'Step 0',
            content: `'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'`,
            orientation: Orientation.Left,
            useHighlightPadding: true,
            skipButtonText: 'Pular',
            doneButtonText: 'Concluído',
            nextButtonText: 'Avançar',
            closeButtonText: 'Fechar',
            backButtonText: 'Voltar',
            imgAvatar: true,
            imgAvatarUrl: '/assets/img/wauto-mini.png',
            imgAvatarAlt: 'testando alt avatar',
            tourStepWidth: 500,
            action: () => { },
            closeAction: () => { },
        },
        {
            title: '<u>Step 1</u>',
            content: `
            <video width="540" controls>
            <source src="/assets/video/conseg.mp4" type="video/mp4">
            Your browser does not support HTML video.
          </video>
            `,
            orientation: Orientation.Right,
            useHighlightPadding: true,
            highlightPadding: 20,
            skipButtonText: 'Pular',
            doneButtonText: 'Concluído',
            nextButtonText: 'Texto Teste Avançar',
            closeButtonText: 'Fechar',
            backButtonText: 'Voltar',
            imgAvatar: false,
            imgAvatarUrl: '/assets/img/wiz-logo.jpg',
            imgAvatarAlt: 'testando alt avatar',
            tourStepWidth: 600
        },
        {
            title: '<u>Step 2</u>',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            orientation: Orientation.Right,
            useHighlightPadding: false,
            skipButtonText: 'Pular',
            doneButtonText: 'Concluído',
            nextButtonText: 'Avançar',
            closeButtonText: 'Fechar',
            backButtonText: 'Voltar',
            imgAvatar: true,
            imgAvatarUrl: '/assets/img/wiz-logo.jpg',
            imgAvatarAlt: 'testando alt avatar',
            tourStepWidth: 400
        },
        {
            title: 'Step 3',
            selector: '.demo-title3',
            content: 'Lorem ipsum dolor sit amet, <u style="color: red;">consectetur adipiscing elit</u>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            orientation: Orientation.Right,
            useRoute: true,
            route: '/teste',
            skipButtonText: 'Pular',
            doneButtonText: 'Concluído',
            nextButtonText: 'Avançar',
            closeButtonText: 'Fechar',
            backButtonText: 'Voltar',
            imgAvatar: true,
            imgAvatarUrl: '/assets/img/wauto-mini.png',
            imgAvatarAlt: 'testando alt avatar'
        },
      ],
    };

  beforeEach(() => {

    mockWindowService = jasmine.createSpyObj('WindowService', [
      'nativeWindow', 'getElement'
    ]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: WindowService, useValue: mockWindowService },
      ],
    });
    service = TestBed.inject(TourService);
  });

  it('should be startTour', () => {
    service.tour = tourTeste;
    service.tourStepIndex = 4;
    expect(service.startTour(tourTeste)).toBe();
  });

  it('should be not step next', () => {
    service.tour = tourTeste;
    service.tourStepIndex = 4;
    expect(service.nextStep()).toBe();
  });

  it('should be backStep', () => {
    service.tour = tourTeste;
    service.tourStepIndex = 1;
    expect(service.backStep()).toBe();
  });

  it('should be not backStep', () => {
    service.tour = tourTeste;
    service.tourStepIndex = 1;
    expect(service.backStep()).toBe();
  });

  it('should be completeTourCallBack completeTourCallBack', fakeAsync(() => {
    service.tour = tourTeste;
    service.tour.completeCallback = () => { };
    expect(service.completeTourCallBack()).toBe();
  }));

  it('should be completeTourCallBack not completeTourCallBack', fakeAsync(() => {
    service.tour = tourTeste;
    service.tour.completeCallback = null;
    expect(service.completeTourCallBack()).toBe();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be nextStep', () => {
    service.tour = tourTeste;
    expect(service.nextStep()).toBe();
  });

  it('should be backStep', () => {
    service.tour = tourTeste;
    expect(service.backStep()).toBe();
  });

  it('should be skipTour', () => {
    service.tour = tourTeste;
    expect(service.skipTour()).toBe();
  });

  it('should be resetTour', () => {
    expect(service.resetTour()).toBe();
  });

  it('should be getPreparedTourStep', () => {
    service.tour = tourTeste;
    const tourStep = tourTeste.tourStep[1];
    expect(service.getPreparedTourStep(1)).toBeTruthy(tourStep);
  });

  it('should be advanceNextStep', () => {
    service.tour = tourTeste;
    expect(service.advanceNextStep()).toBe();
  });

  it('should be comeBackStep', () => {
    service.tour = tourTeste;
    expect(service.comeBackStep()).toBe();
  });

  it('should be setTourOrientation', () => {
    expect(service.setTourOrientation(tourTeste.tourStep[0])).toBeTruthy(tourTeste.tourStep[0]);
  });

  it('should be onLastStep', () => {
    expect(service.onLastStep()).toBe(true);
  });

  it('should be onFirstStep', () => {
    expect(service.onFirstStep()).toBe(true);
  });

  it('should be onResizeMessage', () => {
    expect(service.onResizeMessage()).toBe(false);
  });

  it('should be currentTourStepDisplay', () => {
    expect(service.currentTourStepDisplay()).toBe(0);
  });

  it('should be currentTourStepCount', fakeAsync(() => {
    service.tour = tourTeste;
    expect(service.currentTourStepCount()).toBe(4);
  }));

  it('should be currentTourStepCount not steps', () => {
    expect(service.currentTourStepCount()).toBe(0);
  });

  it('should be preventBackdropFromAdvancing', () => {
    service.tour = tourTeste;
    expect(service.preventBackdropFromAdvancing()).toBe(true);
  });

  it('should be actionOnOpegingStep', () => {
    service.tour = tourTeste;
    expect(service.actionOnOpegingStep(true)).toBe();
  });

  it('should be closeActionStepCallBack', () => {
    expect(service.closeActionStepCallBack()).toBe();
  });
});
