import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoviesService } from '../../services/movies';

@Component({
  selector: 'workspace-modal',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class DeleteModalComponent  {
  constructor(public dialogRef: MatDialogRef<DeleteModalComponent> ,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private movieService:MoviesService) { }
 

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteCase(id, index) {
    console.log(id);
    this.movieService.deleteMovie(id)
      .subscribe(res => {    
          this.data.splice(index,1);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
