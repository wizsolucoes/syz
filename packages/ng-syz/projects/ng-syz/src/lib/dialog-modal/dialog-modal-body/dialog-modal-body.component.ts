import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData } from '../models/dialogData';

@Component({
  selector: 'ng-syz-dialog-modal-body',
  templateUrl: './dialog-modal-body.component.html',
  styleUrls: ['./dialog-modal-body.component.scss']
})
export class DialogModalBodyComponent implements OnInit {

  constructor(private readonly router: Router, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {

  }

  public eventoBotao(): void {
    if (this.data.rotaExterna) {
      window.open(this.data.urlRota, '_blank');
    } else {
      this.router.navigate([this.data.urlRota]);
    }
  }
}
