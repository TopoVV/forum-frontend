import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { PostGetAllResponse, PostGetResponse } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get<PostGetAllResponse>("http://localhost:8080/posts")
      .pipe(
        catchError(this.handleError)
      );
  }

  getPostById(id: number) {
    return this.http.get<PostGetResponse>(`http://localhost:8080/posts/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createPost(newPostData: any) {
    const url = 'http://localhost:8080/posts';
    const createPostRequest = JSON.stringify(newPostData);
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    
    return this.http.post(url, createPostRequest, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse);
    return throwError("Error");
  }
}
