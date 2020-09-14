import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostLibraryComponent } from './post-library/post-library.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostService } from'./_services/post.service';
import { PostComponent } from './post/post.component';
import { RegistrationComponent } from './_registration/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './_registration/user-registration/user-registration.component';
import { RegistrationService } from './_registration/registration.service';
import { SuperuserRegistrationComponent } from './_registration/superuser-registration/superuser-registration.component';
import { AuthenticationService } from './_services/authentication.service';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PostLibraryComponent,
    PostComponent,
    RegistrationComponent,
    UserRegistrationComponent,
    SuperuserRegistrationComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    PostService,
    AuthenticationService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
