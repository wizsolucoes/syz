import { Inject, Injectable } from '@angular/core';
import { Tour } from '../models/tour';
import { DOCUMENT } from '@angular/common';
import { TourStep } from '../models/tourStep';
import { cloneDeep } from 'lodash';
import { Orientation } from '../models/orientation';
import { OrientationConfiguration } from '../models/orientationConfiguration';
import { WindowService } from './window.service';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

/** @dynamic */
@Injectable({
  providedIn: 'root'
})
export class TourService {
  tourCurrentStepStream: Observable<TourStep>;
  tour: Tour;
  tourStepIndex: number;
  tourStepSubject: Subject<TourStep>;
  isOnFirstStep = true;
  isOnLastStep = true;
  isOnResizeMessage = false;
  tourStarted = false;

  constructor(
    @Inject(DOCUMENT) private readonly dom: Document,
    private readonly windowService: WindowService,
    private readonly router: Router
  ) {
    this.tourStepIndex = 0;
    this.tourStepSubject = new Subject<TourStep>();
    this.tourCurrentStepStream = this.tourStepSubject.asObservable();
  }

  /** Iniciar tour */
  public startTour(tour: Tour): void {
    this.tour = cloneDeep(tour);
    this.tour.tourStep = this.tour.tourStep.filter(step => !step.skipStep);
    this.tourStepIndex = 0;
    this.tourStarted = true;
    this.setFirstAndLastStep();

    if (this.tour.tourStep.length > 0 && this.validateScreenWidth()) {
      this.actionOnOpegingStep(true);
    }
  }

  /** Avançar step tour */
  public nextStep(): void {
    this.closeActionStepCallBack();
    if (this.tour.tourStep[this.tourStepIndex + 1]) {
      this.tourStepIndex++;
      this.setFirstAndLastStep();
      if (this.tour.tourStep[this.tourStepIndex].useRoute) {
        this.tour.tourStep[this.tourStepIndex].routePrevious = this.router.url;
        this.router.navigate([this.tour.tourStep[this.tourStepIndex].route]).then(() => this.advanceNextStep());
      } else {
        this.advanceNextStep();
      }
    } else {
      this.completeTourCallBack();
      this.resetTour();
    }
  }

  /** Voltar step tour */
  public backStep(): void {
    this.closeActionStepCallBack();
    if (this.tour.tourStep[this.tourStepIndex - 1]) {
        this.tourStepIndex--;
        this.setFirstAndLastStep();

        if (this.tour.tourStep[this.tourStepIndex + 1].useRoute) {
          const route = this.tour.tourStep[this.tourStepIndex + 1].routePrevious;
          this.tour.tourStep[this.tourStepIndex + 1].routePrevious = null;
          this.router.navigate([route]).then(() => this.comeBackStep());
        } else {
          this.comeBackStep();
        }

    } else {
        this.resetTour();
    }
  }

  /** Pular tour */
  public skipTour(): void {
    if (this.tour.skipCallback) {
        this.tour.skipCallback(this.tourStepIndex);
    }
    this.tourStarted = false;
    this.resetTour();
  }

  /** Resetar tour */
  public resetTour(): void {
    this.dom.body.classList.remove('tour-open');
    this.tour = null;
    this.tourStepIndex = 0;
    this.tourStepSubject.next();
  }

  /** Definir primeiro e último step */
  private setFirstAndLastStep(): void {
    this.isOnLastStep = this.tour.tourStep.length - 1 === this.tourStepIndex;
    this.isOnFirstStep = this.tourStepIndex === 0;
  }

  /** Verificar a validade do seletor */
  private checkSelectorValidity(): boolean {
    if (this.tour.tourStep[this.tourStepIndex].selector) {
      const selectedElement = this.dom.querySelector(this.tour.tourStep[this.tourStepIndex].selector);
      if (!selectedElement) {
        console.error(`Erro ao encontrar o seletor '${this.tour.tourStep[this.tourStepIndex].selector}' no step '${this.tourStepIndex + 1}' durante o tour: '${this.tour.id}'`);
        return false;
      }
    }
    return true;
  }

  /** Preparar o step do tour */
  public getPreparedTourStep(index: number): TourStep {
    return this.setTourOrientation(this.tour.tourStep[index]);
  }

  /** Validar seletor e avançar ou voltar step */
  private validateAndAdvanceOrComeBackStep(advance: boolean): void {
    if (this.checkSelectorValidity()) {
      this.tourStepSubject.next(this.getPreparedTourStep(this.tourStepIndex));
    } else {
      advance ? this.nextStep() : this.backStep();
    }
  }

  /** Avançar próximo step */
  public advanceNextStep(): void {
    this.actionOnOpegingStep(true);
  }

  /** Voltar step anterior */
  public comeBackStep(): void {
    this.actionOnOpegingStep(false);
  }

  /** Definir a orientação do tour */
  public setTourOrientation(step: TourStep): TourStep {
    const convertedStep = cloneDeep(step);
    if (
      convertedStep.orientation &&
      !(typeof convertedStep.orientation === 'string') && (convertedStep.orientation as OrientationConfiguration[]).length) {
      (convertedStep.orientation as OrientationConfiguration[]).sort(
        (a: OrientationConfiguration, b: OrientationConfiguration) => {
          if (!b.maximumSize) {
            return 1;
          }
          if (!a.maximumSize) {
            return -1;
          }
          return b.maximumSize - a.maximumSize;
        }
      );

      let currentOrientation: Orientation = Orientation.Top;
      (convertedStep.orientation as OrientationConfiguration[]).forEach(
        (orientationConfig: OrientationConfiguration) => {
          if (!orientationConfig.maximumSize || this.windowService.nativeWindow.innerWidth <= orientationConfig.maximumSize) {
            currentOrientation = orientationConfig.orientationDirection;
          }
        }
      );

      convertedStep.orientation = currentOrientation;
    }
    return convertedStep;
  }

  /** Validar a largura da tela */
  private validateScreenWidth(): boolean {
    return !this.tour.minimumScreenSize || (this.windowService.nativeWindow.innerWidth >= this.tour.minimumScreenSize);
  }

  public onLastStep(): boolean {
    return this.isOnLastStep;
  }

  public onFirstStep(): boolean {
    return this.isOnFirstStep;
  }

  public onResizeMessage(): boolean {
    return this.isOnResizeMessage;
  }

  public currentTourStepDisplay(): number {
    return this.tourStepIndex++;
  }

  public currentTourStepCount(): number {
    return this.tour && this.tour.tourStep ? this.tour.tourStep.length : 0;
  }

  public preventBackdropFromAdvancing(): boolean {
    return this.tour && this.tour.preventBackdropFromAdvancing;
  }

  /** Ação chamada ao abrir o step */
  public actionOnOpegingStep(advance: boolean): void {
    if (this.tour.tourStep[this.tourStepIndex].action) {
      this.tour.tourStep[this.tourStepIndex].action();
      setTimeout(() => {
        this.validateAndAdvanceOrComeBackStep(advance);
      });
    } else {
      setTimeout(() => {
        this.validateAndAdvanceOrComeBackStep(advance);
      });
    }
  }

  /** Ação chamada ao completar tour */
  public completeTourCallBack(): void {
    this.tourStarted = false;
    if (this.tour.completeCallback) { this.tour.completeCallback(); }
  }

  /** Ação chamada ao fechar o step */
  public closeActionStepCallBack(): void {
    if (this.tour?.tourStep[this.tourStepIndex]?.closeAction) {
      this.tour.tourStep[this.tourStepIndex].closeAction();
    }
  }
}
