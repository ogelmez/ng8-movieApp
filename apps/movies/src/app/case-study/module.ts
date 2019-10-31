import { NgModule } from '@angular/core';
import { CaseStudyComponent } from './component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatFormFieldModule, MatCardModule, MatMenuModule, MatCheckboxModule, MatButtonModule,MatInputModule, MatDialogModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { CaseStudyOptions } from './options/factory';
import { RouterModule } from '@angular/router';
import { DeleteModalComponent } from './modal/component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CaseStudyComponent,DeleteModalComponent],
  exports: [
    CaseStudyComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatMenuModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxPaginationModule
    

  ],
  providers: [{ provide: CaseStudyOptions, useClass: CaseStudyOptions }],
  entryComponents : [DeleteModalComponent]

})
export class CaseStudyModule { }
