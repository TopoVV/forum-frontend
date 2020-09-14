import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  postCreateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.postCreateForm = this.fb.group({
      title: [''],
      text: ['']
    });
  }

  savePost() {
    this.postService.createPost(this.postCreateForm.value).subscribe({
      complete: () => {
        this.router.navigateByUrl('/posts');
      }
    });
  }

}
