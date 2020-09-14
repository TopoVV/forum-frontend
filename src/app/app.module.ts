import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostLibraryComponent } from './_post/post-library/post-library.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostService } from'./_post/service/post.service';
import { PostComponent } from './_post/post/post.component';
import { RegistrationComponent } from './_registration/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './_registration/user-registration/user-registration.component';
import { RegistrationService } from './_registration/service/registration.service';
import { SuperuserRegistrationComponent } from './_registration/superuser-registration/superuser-registration.component';
import { AuthenticationService } from './_login/login/service/authentication.service';
import { LoginComponent } from './_login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from './_helper/jwt.interceptor';
import { HomeComponent } from './_home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostLibraryComponent,
    PostComponent,
    RegistrationComponent,
    UserRegistrationComponent,
    SuperuserRegistrationComponent,
    LoginComponent,
    HomeComponent
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
    RegistrationService, {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
