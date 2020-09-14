import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostLibraryComponent } from './_post/post-library/post-library.component';
import { AppComponent } from './app.component';
import { PostComponent } from './_post/post/post.component';
import { RegistrationComponent } from './_registration/registration/registration.component';
import { UserRegistrationComponent } from './_registration/user-registration/user-registration.component';
import { SuperuserRegistrationComponent } from './_registration/superuser-registration/superuser-registration.component';
import { LoginComponent } from './_login/login/login.component';
import { HomeComponent } from './_home/home/home.component';
import { PostCreateComponent } from './_post/post-create/post-create.component';

const registrationRoutes: Routes = [
  { path: 'user', component: UserRegistrationComponent },
  { path: 'superuser', component: SuperuserRegistrationComponent }
]

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostLibraryComponent },
  { path: 'posts/create', component: PostCreateComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'registration', component: RegistrationComponent, children: registrationRoutes },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
