import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EditCaseStudyComponent } from '../edit-case-study/component';
import { MatFormFieldModule, MatButtonModule,MatRadioModule,MatInputModule ,MatDialogModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { EditModalComponent } from './modal/component';

@NgModule({
  declarations: [EditCaseStudyComponent,EditModalComponent],
  exports: [
    EditCaseStudyComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    RouterModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[EditModalComponent]
})
export class EditCaseStudyModule { }
