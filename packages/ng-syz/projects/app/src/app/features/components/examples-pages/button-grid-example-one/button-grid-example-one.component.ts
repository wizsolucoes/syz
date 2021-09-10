import { Component, OnInit } from '@angular/core';
import { NgSyzButton } from 'projects/ng-syz/src/lib/models';

@Component({
  selector: 'app-button-grid-example-one',
  templateUrl: './button-grid-example-one.component.html',
  styleUrls: ['./button-grid-example-one.component.scss'],
})
export class ButtonGridExampleOneComponent implements OnInit {
  tituloExemplo1 = 'Tipo de Seguro';
  subtituloExemplo1 = 'Seguros disponíveis';
  buttons: NgSyzButton[] = [
    {
      text: 'Seguro Agrícola',
      iconClass: 'fa fa-address-book',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Cafezal',
      iconClass: 'fa fa-coffee',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Pecuário',
      iconClass: 'fa fa-eercast',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Canavial',
      iconClass: 'fa fa-picture-o',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Floresta',
      iconClass: 'fa fa-tree',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Penhor de Grãos',
      iconClass: 'fa fa-picture-o',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Benfeitorias e Multirrisco rural',
      iconClass: 'fa fa-picture-o',
      disabled: true,
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Automotivo',
      iconClass: 'fa fa-car',
      disabled: true,
    },
    {
      text: 'Seguro Penhor de Máquinas e Equipamentos ',
      imgPath: 'imgPath',
      route: '/components/button-grid',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
