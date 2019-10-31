import { Component, OnInit } from '@angular/core';
import { CaseStudyOptions } from './options/factory';
import { MatDialog } from '@angular/material';
import { DeleteModalComponent } from './modal/component';
import { MoviesService } from '../services/movies';
import { Router } from '@angular/router';

@Component({
  selector: 'workspace-case-study',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  providers: [CaseStudyOptions]
})
export class CaseStudyComponent implements OnInit {
  movieList:any;
  movieAllList:any;
  isAscendic: Boolean = false;
  checkAllMovie: Boolean = true;
  checkSeries: Boolean = false;
  checkMovies: Boolean = false;
  positiveVoteCounter: number;
  negativeVoteCounter : number;
  pageActual : number;


  constructor(public factoryOptions: CaseStudyOptions,
    public dialog: MatDialog,
    private movieService: MoviesService,
    private router: Router) {
  }
  ngOnInit() {
    this.pageActual = 1;
    this.movieService.getMovies()
    .subscribe(res => {
      this.movieList = res;
      this.movieAllList = res;
    });
 
  }

 
  sendOrderAsc() {
    this.factoryOptions.ascendic(this.movieList);
  }

  sendOrderDesc() {
    this.factoryOptions.descendic(this.movieList);
  }

  getAllMovie() {
    this.checkAllMovie = true;
    this.checkMovies = false;
    this.checkSeries = false;
    this.movieList = this.movieAllList;
  }

  getSeries() {
    this.checkSeries = true;
    this.checkMovies = false;
    this.checkAllMovie = false;
    this.movieList = this.movieAllList;
    const result = this.movieList.filter(element => {
      return element.categoryId === 2;
    });
    this.movieList = result;
  
  }

  getMovies() {
    this.checkSeries = false;
    this.checkMovies = true;
    this.checkAllMovie = false;
    this.movieList = this.movieAllList;
    const result = this.movieList.filter(element => {
      return element.categoryId === 1;
    });
    this.movieList = result;
  }

  
  openDialog(id,name,index): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '500px',
      height: '500px',
      data: {id:id,name:name,index:index}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  public gotoCaseDetails(url, item) {
    this.router.navigate([url, item]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
}


}
