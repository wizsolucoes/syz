import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalBodyComponent } from './dialog-modal-body/dialog-modal-body.component';

@Component({
  selector: 'ng-syz-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class NgSyzDialogModalComponent implements OnInit {
  @Input() texto: string = "Dias 20 e 27 de Agosto *"
  @Input() titulo: string = "HackaSyz 2021"
  @Input() textoBotao: string = "botão"
  @Input() rotaExterna: boolean = false
  @Input() urlRota: string
  @Input() imagem: string = "https://i.stack.imgur.com/W9kaK.jpg"
  @Input() percentBorderRadiusButton: number = 100

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  /**
   * abrirModal
 : void  */
 public abrirModal(): void {
  const dialogRef = this.dialog.open(DialogModalBodyComponent,
    {
      data:{
        titulo:this.titulo,
        texto:this.texto,
        textoBotao:this.textoBotao,
        rotaExterna:this.rotaExterna,
        urlRota:this.urlRota,
        imagem:this.imagem,
        percentBorderRadiusButton:this.percentBorderRadiusButton
    }
  })

  dialogRef.afterClosed().subscribe(result => {})
}

}


