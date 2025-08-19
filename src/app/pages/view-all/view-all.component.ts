import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';

@Component({ 
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent {
  protected allPosts : any;

  constructor(private postService: PostService,
    private snackBar: MatSnackBar){}

    ngOnInit(){
      this.getAllPosts();
    }



async getAllPosts() {
  try {
    const result = await firstValueFrom(this.postService.getAllPosts());
    this.allPosts = result;
  } catch (error) {
    console.error(error);
  }
}
}
