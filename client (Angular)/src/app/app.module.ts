import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { VideoListComponent } from './_components/video-list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormModalNewVideoComponent } from './_components/form-modal-new-video';
import { VideoListHeaderComponent } from './_components/video-list-header'
import { VideoListBodyComponent } from './_components/video-list-body'
import { EmbedVideo } from 'ngx-embed-video';
import { ConfirmRemoveVideoComponent } from './_components/confirm-remove-video';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoListBodyComponent,
    ConfirmRemoveVideoComponent,
    VideoListHeaderComponent,
    FormModalNewVideoComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    appRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    EmbedVideo.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    DatePipe
  ],
  exports: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FormModalNewVideoComponent,
    ConfirmRemoveVideoComponent
  ]
})
export class AppModule { }
