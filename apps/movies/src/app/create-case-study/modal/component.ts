import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'workspace-modal',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class CreateCaseModalComponent  {

  constructor(public dialogRef: MatDialogRef<CreateCaseModalComponent> ) { }

}
