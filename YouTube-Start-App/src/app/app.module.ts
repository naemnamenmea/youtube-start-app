import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { VideoComponent } from './videos/video/video.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { VideoListComponent } from './videos/video-list/video-list.component';
import { VideosComponent } from './videos/videos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormModalNewVideoComponent } from './form-modal-new-video/form-modal-new-video.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    VideoListComponent,
    VideosComponent,
    FormModalNewVideoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FormModalNewVideoComponent
  ]
})
export class AppModule { }
