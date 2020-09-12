import { Component, OnInit } from '@angular/core';
import { Post } from '../post-library/post';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post : Post;

  constructor(
    private httpService : HttpService,
    private route : ActivatedRoute
  ) {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.post = httpService.getPostById(id).post;  
  }

  ngOnInit(): void {
  }
}
