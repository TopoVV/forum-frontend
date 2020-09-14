import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/post';
@Component({
  selector: 'app-post-library',
  templateUrl: './post-library.component.html',
  styleUrls: ['./post-library.component.scss']
})
export class PostLibraryComponent {

  posts : Post[] = [];

  constructor(private postService : PostService) { 
    postService.getAllPosts().subscribe(response => {
      this.posts = response.posts.content;
    })
  }
}
