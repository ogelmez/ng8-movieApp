import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule, MatButtonModule,MatRadioModule,MatInputModule, MatDialogModule } from '@angular/material';
import { CreateCaseStudyComponent } from './component';
import { RouterModule } from '@angular/router';
import { CreateCaseModalComponent } from './modal/component';

@NgModule({
  declarations: [CreateCaseStudyComponent,CreateCaseModalComponent],
  exports: [
    CreateCaseStudyComponent,CreateCaseModalComponent
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
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents : [CreateCaseModalComponent]
})
export class CreateCaseStudyModule { }
