import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { PostGetAllResponse, PostGetResponse } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  getAllPosts() {
    return this.http.get<PostGetAllResponse>("http://localhost:8080/posts")
      .pipe(
        catchError(this.handleError)
      );
  }

  getPostById(id : number) {
    return new PostGetResponse()
  }

  handleError(errorResponse : HttpErrorResponse) {
    console.log(errorResponse);
    return throwError("Error");
  }
}
