import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Orientation } from './models/orientation';
import { Tour } from './models/tour';
import { TourStep } from './models/tourStep';
import { TourService } from './services/tour.service';
import { WindowService } from './services/window.service';

/** @dynamic */
@Component({
  selector: 'ng-syz-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
})
export class NgSyzTourComponent implements AfterViewInit, OnDestroy {
  @ViewChild('tourStep', { static: false }) public tourStep: ElementRef;
  @Input() public topOfPageAdjustment = 0;
  @Input() public minimalTourStepWidth = 200;

  tourStepWidth = 300;
  highlightPadding = 4;
  imgAvatarWidth = 120;
  imgAvatarHeight = 120;
  skipButtonText = 'Pular';
  doneButtonText = 'Concluído';
  nextButtonText = 'Avançar';
  closeButtonText = 'Fechar';
  backButtonText = 'Voltar';

  currentTour: Tour = null;
  currentTourStep: TourStep;
  selectedElementRect: DOMRect;

  resizeSubscription: Subscription;
  scrollSubscription: Subscription;

  constructor(
    @Inject(DOCUMENT) private dom: Document,
    private readonly windowService: WindowService,
    public readonly tourService: TourService
  ) {}

  ngAfterViewInit(): void {
    this.tourService.tourCurrentStepStream.subscribe((step: TourStep) => {
      this.currentTourStep = step;
      if (step && step.selector) {
        const selectedElement = this.dom.querySelector(step.selector);
        if (selectedElement) {
          this.scrollToAndSetElement();
        } else {
          this.selectedElementRect = null;
        }
      } else {
        this.selectedElementRect = null;
      }
    });

    this.resizeSubscription = fromEvent(
      this.windowService.nativeWindow,
      'resize'
    ).subscribe(() => {
      this.updateStepLocation();
    });

    this.scrollSubscription = fromEvent(
      this.windowService.nativeWindow,
      'scroll'
    ).subscribe(() => {
      this.updateStepLocation();
    });
  }

  ngOnDestroy(): void {
    this.resizeSubscription?.unsubscribe();
    this.scrollSubscription?.unsubscribe();
  }

  private scrollToAndSetElement(): void {
    this.updateStepLocation();
    setTimeout(() => {
      if (!this.isTourOnScreen()) {
        const topPosition = this.getStepScreenAdjustment();
        try {
          this.windowService.nativeWindow.scrollTo({
            left: null,
            top: topPosition,
            behavior: 'smooth',
          });
        } catch (err) {
          if (err instanceof TypeError) {
            this.windowService.nativeWindow.scroll(0, topPosition);
          } else {
            throw err;
          }
        }
      }
    });
  }

  private updateStepLocation(): void {
    if (this.currentTourStep && this.currentTourStep.selector) {
      const selectedElement = this.dom.querySelector(
        this.currentTourStep.selector
      );
      if (
        selectedElement &&
        typeof selectedElement.getBoundingClientRect === 'function'
      ) {
        this.selectedElementRect =
          selectedElement.getBoundingClientRect() as DOMRect;
      } else {
        this.selectedElementRect = null;
      }
    } else {
      this.selectedElementRect = null;
    }
  }

  private getStepScreenAdjustment(): number {
    let positionElementSelected = 0;

    const elementSelector = this.dom.querySelector<HTMLElement>(this.currentTourStep.selector);

    if (elementSelector !== null) {
      positionElementSelected = elementSelector.offsetTop;
      positionElementSelected -= this.topOfPageAdjustment;

      if (this.isTop()) {
        const tourStepHeight = typeof this.tourStep.nativeElement.getBoundingClientRect === 'function' ?
          this.tourStep.nativeElement.getBoundingClientRect().height : 0;
        positionElementSelected -= tourStepHeight;
      }

      const scrollAdjustment = this.currentTourStep.scrollAdjustment ? this.currentTourStep.scrollAdjustment : 0;
      positionElementSelected += scrollAdjustment;
    }

    return positionElementSelected;
  }

  private isTourOnScreen(): boolean {
    return (
      this.tourStep &&
      this.elementInViewport(
        this.dom.querySelector(this.currentTourStep.selector)
      ) &&
      this.elementInViewport(this.tourStep.nativeElement)
    );
  }

  private elementInViewport(element: HTMLElement): boolean {
    let top = element.offsetTop;
    const height = element.offsetHeight;

    while (element.offsetParent) {
      element = element.offsetParent as HTMLElement;
      top += element.offsetTop;
    }
    if (this.isBottom()) {
      return (
        top >=
          this.windowService.nativeWindow.pageYOffset +
            this.topOfPageAdjustment +
            (this.currentTourStep.scrollAdjustment
              ? this.currentTourStep.scrollAdjustment
              : 0) +
            this.getStepScreenAdjustment() &&
        top + height <=
          this.windowService.nativeWindow.pageYOffset +
            this.windowService.nativeWindow.innerHeight
      );
    } else {
      return (
        top >=
          this.windowService.nativeWindow.pageYOffset +
            this.topOfPageAdjustment -
            this.getStepScreenAdjustment() &&
        top +
          height +
          (this.currentTourStep.scrollAdjustment
            ? this.currentTourStep.scrollAdjustment
            : 0) <=
          this.windowService.nativeWindow.pageYOffset +
            this.windowService.nativeWindow.innerHeight
      );
    }
  }

  private isBottom(): boolean {
    return (
      this.currentTourStep.orientation &&
      (this.currentTourStep.orientation === Orientation.Bottom ||
        this.currentTourStep.orientation === Orientation.BottomLeft ||
        this.currentTourStep.orientation === Orientation.BottomRight)
    );
  }

  private isTop(): boolean {
    return (
      this.currentTourStep.orientation &&
      (this.currentTourStep.orientation === Orientation.Top ||
        this.currentTourStep.orientation === Orientation.TopLeft ||
        this.currentTourStep.orientation === Orientation.TopRight)
    );
  }

  calculatedTourStepWidth(): number {
    return this.getTourStepWidth() - this.widthAdjustmentForScreenBound();
  }

  private widthAdjustmentForScreenBound(): number {
    if (!this.tourStep) {
      return 0;
    }
    let adjustment = 0;
    if (this.calculatedLeftPosition() < 0) {
      adjustment = -this.calculatedLeftPosition();
    }
    if (
      this.calculatedLeftPosition() >
      this.windowService.nativeWindow.innerWidth - this.getTourStepWidth()
    ) {
      adjustment =
        this.calculatedLeftPosition() -
        (this.windowService.nativeWindow.innerWidth - this.getTourStepWidth());
    }

    return Math.min(this.maxWidthAdjustmentForTourStep(), adjustment);
  }

  topPosition(): number {
    const paddingAdjustment = this.getHighlightPadding();

    if (this.isBottom()) {
      return (
        this.selectedElementRect.top +
        this.selectedElementRect.height +
        paddingAdjustment
      );
    }

    return this.selectedElementRect.top - this.getHighlightPadding();
  }

  leftPosition(): number {
    if (this.calculatedLeftPosition() >= 0) {
      return this.calculatedLeftPosition();
    }
    const adjustment = Math.max(0, -this.calculatedLeftPosition);
    const maxAdjustment = Math.min(
      this.maxWidthAdjustmentForTourStep(),
      adjustment
    );
    return this.calculatedLeftPosition() + maxAdjustment;
  }

  private calculatedLeftPosition(): number {
    const paddingAdjustment = this.getHighlightPadding();

    if (
      this.currentTourStep.orientation === Orientation.TopRight ||
      this.currentTourStep.orientation === Orientation.BottomRight
    ) {
      return this.selectedElementRect.right - this.getTourStepWidth();
    }

    if (
      this.currentTourStep.orientation === Orientation.TopLeft ||
      this.currentTourStep.orientation === Orientation.BottomLeft
    ) {
      return this.selectedElementRect.left;
    }

    if (this.currentTourStep.orientation === Orientation.Left) {
      return (
        this.selectedElementRect.left -
        this.getTourStepWidth() -
        paddingAdjustment
      );
    }

    if (this.currentTourStep.orientation === Orientation.Right) {
      return (
        this.selectedElementRect.left +
        this.selectedElementRect.width +
        paddingAdjustment
      );
    }

    return (
      this.selectedElementRect.right -
      this.selectedElementRect.width / 2 -
      this.getTourStepWidth() / 2
    );
  }

  private getHighlightPadding(): number {
    let paddingAdjustment = this.currentTourStep.useHighlightPadding
      ? this.highlightPadding
      : 0;

    if (this.currentTourStep.highlightPadding) {
      paddingAdjustment = this.currentTourStep.highlightPadding;
    }

    return paddingAdjustment;
  }

  private getImgAvatarWidth(): number {
    return this.currentTourStep.imgAvatarWidth ?? this.imgAvatarWidth;
  }

  private getImgAvatarHeight(): number {
    return this.currentTourStep.imgAvatarHeight ?? this.imgAvatarHeight;
  }

  private getTourStepWidth(): number {
    return this.currentTourStep.tourStepWidth ?? this.tourStepWidth;
  }

  private maxWidthAdjustmentForTourStep(): number {
    return this.getTourStepWidth() - this.minimalTourStepWidth;
  }

  overlayTop(): number {
    return this.selectedElementRect
      ? this.selectedElementRect.top - this.getHighlightPadding()
      : 0;
  }

  overlayLeft(): number {
    return this.selectedElementRect
      ? this.selectedElementRect.left - this.getHighlightPadding()
      : 0;
  }

  overlayHeight(): number {
    return this.selectedElementRect
      ? this.selectedElementRect.height + this.getHighlightPadding() * 2
      : 0;
  }

  overlayWidth(): number {
    return this.selectedElementRect
      ? this.selectedElementRect.width + this.getHighlightPadding() * 2
      : 0;
  }

  backdropClick(event: Event): void {
    this.tourService.preventBackdropFromAdvancing()
      ? event.stopPropagation()
      : this.tourService.nextStep();
  }

  transform(): string {
    if (
      !this.currentTourStep.orientation ||
      this.currentTourStep.orientation === Orientation.Top ||
      this.currentTourStep.orientation === Orientation.TopRight ||
      this.currentTourStep.orientation === Orientation.TopLeft
    ) {
      return 'translateY(-100%)';
    }
    return null;
  }

  leftPositionAvatar(): number {
    let response = 0;

    const paddingAdjustment = this.getHighlightPadding();
    const widthAdjustment = this.getImgAvatarWidth();

    if (this.currentTourStep?.orientation === Orientation.Left) {
      response = this.selectedElementRect
        ? this.selectedElementRect.left -
          (widthAdjustment + 10) -
          this.getTourStepWidth() -
          paddingAdjustment
        : 0;
    }

    if (this.currentTourStep?.orientation === Orientation.Right) {
      response = this.selectedElementRect
        ? this.selectedElementRect.right +
          this.getTourStepWidth() +
          paddingAdjustment +
          10
        : 0;
    }

    if (
      this.currentTourStep?.orientation === Orientation.Bottom ||
      this.currentTourStep?.orientation === Orientation.BottomLeft ||
      this.currentTourStep?.orientation === Orientation.BottomRight
    ) {
      response = this.selectedElementRect
        ? this.selectedElementRect.left -
          (this.selectedElementRect.left - this.getTourStepWidth())
        : 0;
    }

    if (
      this.currentTourStep?.orientation === Orientation.Top ||
      this.currentTourStep?.orientation === Orientation.TopLeft ||
      this.currentTourStep?.orientation === Orientation.TopRight
    ) {
      response = this.getTourStepWidth() / 2 - widthAdjustment / 2;
    }

    return response;
  }

  topPositionAvatar(): number {
    let response = 0;

    const heightAdjustment = this.getImgAvatarHeight();

    if (this.currentTourStep?.orientation === Orientation.Left) {
      response = this.selectedElementRect ? this.selectedElementRect.top : 0;
    }

    if (this.currentTourStep?.orientation === Orientation.Right) {
      response = this.selectedElementRect ? this.selectedElementRect.top : 0;
    }

    if (
      this.currentTourStep?.orientation === Orientation.Bottom ||
      this.currentTourStep?.orientation === Orientation.BottomLeft ||
      this.currentTourStep?.orientation === Orientation.BottomRight
    ) {
      response = this.selectedElementRect
        ? this.selectedElementRect.top + (this.overlayHeight() + 20)
        : 0;
    }

    if (
      this.currentTourStep?.orientation === Orientation.Top ||
      this.currentTourStep?.orientation === Orientation.TopLeft ||
      this.currentTourStep?.orientation === Orientation.TopRight
    ) {
      response = -heightAdjustment - 10;
    }

    return response;
  }
}
