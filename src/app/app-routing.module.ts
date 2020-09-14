import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostLibraryComponent } from './post-library/post-library.component';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { RegistrationComponent } from './_registration/registration/registration.component';
import { UserRegistrationComponent } from './_registration/user-registration/user-registration.component';
import { SuperuserRegistrationComponent } from './_registration/superuser-registration/superuser-registration.component';
import { LoginComponent } from './login/login.component';

const registrationRoutes : Routes = [
  { path: 'user', component: UserRegistrationComponent },
  { path: 'superuser', component: SuperuserRegistrationComponent }
]

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostLibraryComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'registration', component: RegistrationComponent, children: registrationRoutes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
