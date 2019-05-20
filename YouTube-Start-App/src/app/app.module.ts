import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { VideoListComponent } from './video-list/video-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormModalNewVideoComponent } from './form-modal-new-video/form-modal-new-video.component';
import { VideoListHeaderComponent } from './video-list/video-list-header/video-list-header.component'
import { VideoListBodyComponent } from './video-list/video-list-body/video-list-body.component'
import { EmbedVideo } from 'ngx-embed-video';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoListBodyComponent,
    VideoListHeaderComponent,
    FormModalNewVideoComponent
  ],
  imports: [
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
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FormModalNewVideoComponent
  ]
})
export class AppModule { }
