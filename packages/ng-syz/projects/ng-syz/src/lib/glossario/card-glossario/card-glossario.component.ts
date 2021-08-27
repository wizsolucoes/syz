import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { style, animate } from '@angular/animations';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'ng-syz-card-glossario',
  templateUrl: './card-glossario.component.html',
  styleUrls: ['./card-glossario.component.scss']
})
export class NgSyzCardGlossarioComponent implements OnInit {
  @ViewChild(NgxMasonryComponent, { static: false }) masonry: NgxMasonryComponent;

  @Input() titulo: string;
  @Input() listaGlossario: any[];

  masonryOptions: NgxMasonryOptions = {
    resize: true,
    initLayout: true,
    originLeft: true,
    horizontalOrder: true,
    animations: {
      show: [
        style({ opacity: 0 }),
        animate('800ms ease-in', style({ opacity: 1 })),
      ],
      hide: [
        style({ opacity: '*' }),
        animate('800ms ease-in', style({ opacity: 0 })),
      ]
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
