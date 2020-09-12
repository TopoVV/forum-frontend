import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Post } from './post';

@Component({
  selector: 'app-post-library',
  templateUrl: './post-library.component.html',
  styleUrls: ['./post-library.component.scss']
})
export class PostLibraryComponent implements OnInit {

  posts : Post[] = [];

  constructor(private httpService : HttpService) { 
    // httpService.getAllPosts().subscribe(response => {
    //   this.posts = response.posts.content;
    // })
    this.posts = httpService.getAllPosts().posts.content;
    console.log(this.posts);
  }


  ngOnInit(): void {
  }

}
