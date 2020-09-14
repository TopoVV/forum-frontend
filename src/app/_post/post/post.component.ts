import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post = new Post();

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this.postService.getPostById(id).subscribe(resposne => {
      this.post = resposne.postDto;
    });
  }
}
