import { Component, OnInit } from '@angular/core';
import { CreateCaseModalComponent } from './modal/component';
import { MatDialog } from '@angular/material';
import { MoviesService } from '../services/movies';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CaseModel } from '../case-study/options/model';
import { Router } from '@angular/router';

@Component({
  selector: 'workspace-create-case-study',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class CreateCaseStudyComponent implements OnInit {
  addCaseStudyForm: FormGroup;
  movieDto: CaseModel = new CaseModel();
  movieList: any;
  constructor(public dialog: MatDialog,
    private movieService: MoviesService,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.createCaseAddForm();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCaseModalComponent, {
      width: '500px',
      height: '500px',
      data: {}
    });

  }
  createCaseAddForm() {
    this.addCaseStudyForm = this.formBuilder.group({
      name: ["", Validators.required],
      categoryId: ["", Validators.required],
      rating: ["", [Validators.required, Validators.max(10), Validators.min(0)]]

    })
  }
  addMovie() {
    if (this.addCaseStudyForm.valid) {
      this.movieDto = Object.assign({}, this.addCaseStudyForm.value)
    }
    this.movieService.addMovie(this.movieDto).subscribe(data => {
      this.movieList = data;
      this.router.navigate(['/case-study']);
    });

  }


}
