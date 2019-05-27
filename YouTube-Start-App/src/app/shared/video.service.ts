import { Injectable } from '@angular/core';
import { Video } from './video.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  video: Video;
  videoList: Video[];
  readonly youtubeURL = 'https://www.youtube.com';
  // readonly rootURL = 'http://localhost:58965/api';
  readonly rootURL = 'https://localhost:44326/api';
  readonly videosController = 'videos';

  constructor(
    private http: HttpClient
  ) {
    // let video_id = "jYvkMv7LzCw";
    // this.http.get("http://www.youtube.com/oembed?url=https://www.youtube.com/watch?v="
    //   + video_id + "&format=json").subscribe(res => {
    //     console.log(res);
    //   });

    this.testConnection();    
  }
  
  getVideo(videoId: string) {
    return this.http.get("https://noembed.com/embed?url=https://www.youtube.com/watch?v=" + videoId);
  }

  testConnection() {
    this.http.get(this.rootURL + '/' + this.videosController)
    .toPromise().then(res => {
      console.log('SUCCESS: Connection established!');
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  }

  existsVideo(id: string) {
    return true;
  }

  refreshList() {
    this.http.get(this.rootURL + '/' + this.videosController)
      .subscribe(res => this.videoList = res as Video[]);
  }

  addVideo(video: Video) {
    return this.http.post(this.rootURL + '/' + this.videosController, video)
      .subscribe(res => {
        this.videoList.push(res as Video)
        this.refreshList();
      });
  }

  removeVideo(url: string) {
    return this.http.delete(this.rootURL + '/' + this.videosController + '/' + url);
  }

  showLastVideos() {

  }



  top(num: number = 10) {

  }
}
