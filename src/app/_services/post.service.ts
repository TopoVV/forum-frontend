import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostGetAllResponse, PostGetResponse } from '../post-library/post'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  getAllPosts() {
    return new PostGetAllResponse();
    //return this.http.get<PostGetAllResponse>("http://localhost:8080/posts");
  }

  getPostById(id : number) {
    return new PostGetResponse()
  }
}
