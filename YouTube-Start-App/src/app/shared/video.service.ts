import { Injectable } from '@angular/core';
import { Video } from './video.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  video: Video;
  videoList: Video[];
  readonly rootURL = 'http://localhost:58965/api';

  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.rootURL + '/Video')
      .toPromise().then(res => this.videoList = res as Video[]);
  }

  addVideo(video: Video) {
    return this.http.post(this.rootURL + '/Video', video);
  }
}

