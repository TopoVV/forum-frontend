import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostLibraryComponent } from './post-library/post-library.component';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "posts", component: PostLibraryComponent },
  { path: "posts/:id", component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
