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
  readonly youtubeURL = 'https://www.youtube.com';

  constructor(
    private http: HttpClient
    ) {
      
  }

  
  existsVideo(url : string) {
    return true;
  }

  refreshList() {
    this.http.get(this.rootURL + '/Video')
      .subscribe(res => this.videoList = res as Video[]);
  }

  addVideo(video: Video) {
    return this.http.post(this.rootURL + '/Video', video)
      .subscribe(res => {
        this.videoList.push(res as Video)
        this.refreshList();
      });
  }

  removeVideo(url: string) {
    return this.http.delete(this.rootURL + '/Video/' + url);
  }

  showLastVideos() {

  }

  top(num: number = 10) {

  }
}
