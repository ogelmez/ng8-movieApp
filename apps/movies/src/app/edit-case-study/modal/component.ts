import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'workspace-modal',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class EditModalComponent  {

  constructor(public dialogRef: MatDialogRef<EditModalComponent> ) { }


}
