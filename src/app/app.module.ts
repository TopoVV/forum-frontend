import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostLibraryComponent } from './post-library/post-library.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostService } from'./_services/post.service';
import { PostComponent } from './post/post.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RegistrationService } from './_services/registration.service';
import { SuperuserRegistrationComponent } from './superuser-registration/superuser-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    PostLibraryComponent,
    PostComponent,
    RegistrationComponent,
    UserRegistrationComponent,
    SuperuserRegistrationComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PostService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
