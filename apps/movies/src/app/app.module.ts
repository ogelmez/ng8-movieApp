import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudyModule } from './case-study/module';
import { CreateCaseStudyModule } from './create-case-study/module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaseStudyComponent } from './case-study/component';
import { CreateCaseStudyComponent } from './create-case-study/component';
import { EditCaseStudyComponent } from './edit-case-study/component';
import { EditCaseStudyModule } from './edit-case-study/module';
import { MoviesService } from './services/movies';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const  appRoutes:  Routes  = [
  { path:  'case-study', component:  CaseStudyComponent },
  { path:  'create-study', component:  CreateCaseStudyComponent },
  { path:  'edit-study/:id', component:  EditCaseStudyComponent },
  { path:  '',  redirectTo:  '/case-study', pathMatch:  'full' },
  ];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CaseStudyModule,
    CreateCaseStudyModule,
    EditCaseStudyModule,
    CreateCaseStudyModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled',enableTracing: true },),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]

})
export class AppModule {}
