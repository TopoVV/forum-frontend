import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Post } from './post';

@Component({
  selector: 'app-post-library',
  templateUrl: './post-library.component.html',
  styleUrls: ['./post-library.component.scss']
})
export class PostLibraryComponent {

  posts : Post[] = [];

  constructor(private httpService : PostService) { 
    // httpService.getAllPosts().subscribe(response => {
    //   this.posts = response.posts.content;
    // })
    this.posts = httpService.getAllPosts().posts.content;
    console.log(this.posts);
  }
}
