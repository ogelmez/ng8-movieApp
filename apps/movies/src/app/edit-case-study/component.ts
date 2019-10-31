import { Component, OnInit } from '@angular/core';
import { EditModalComponent } from './modal/component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseModel } from '../case-study/options/model';
import { MoviesService } from '../services/movies';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'workspace-edit-case-study',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class EditCaseStudyComponent implements OnInit {
  movieDetail: any;
  checkMovie: Boolean = false;
  checkSeries: Boolean = false;
  editCaseStudyForm: FormGroup;
  movieDto: CaseModel = new CaseModel();
  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieService.getMovieDetail(params.id).subscribe(res => {
        this.movieDetail = res;
        this.editCaseStudyForm.setValue(res);
        if (this.movieDetail.categoryId == 1) {
          this.checkMovie = true;
          this.checkSeries = false;
        }
        else {
          this.checkSeries = true;
          this.checkMovie = false;
        }
      });
    })

    this.editCaseAddForm();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '500px',
      height: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  editCaseAddForm() {
    this.editCaseStudyForm = this.formBuilder.group({
      id: [""],
      name: ["", Validators.required],
      categoryId: ["", Validators.required],
      rating: ["", [Validators.required,Validators.max(10),Validators.min(0)]]

    })

  }
  editMovie(id) {
    console.log(id);
    if (this.editCaseStudyForm.valid) {
      this.movieDto = Object.assign({}, this.editCaseStudyForm.value)
    }
    this.movieService.updateMovie(this.movieDto).subscribe(data => {
      this.router.navigate(['/case-study']);
    });

  }

}
