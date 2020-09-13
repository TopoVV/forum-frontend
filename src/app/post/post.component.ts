import { Component, OnInit } from '@angular/core';
import { Post } from '../post-library/post';
import { PostService } from '../_services/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  post : Post;

  constructor(
    private postService : PostService,
    private route : ActivatedRoute
  ) {
    const id = this.route.snapshot.params['id'];
    this.post = postService.getPostById(id).post;  
  }
}
