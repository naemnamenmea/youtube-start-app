import { Injectable } from '@angular/core';
import { Video } from './video.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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

  addVideo(videoId: string) {
    return this.http.post(this.rootURL + '/' + this.videosController, videoId);
  }

  removeVideo(url: string) {
    return this.http.delete(this.rootURL + '/' + this.videosController + '/' + url);
  }

  showLastVideos() {

  }

  top(num: number = 10) {

  }

  getVideoById(videoId: string) {
    let url = 'https://noembed.com/embed?url=https://www.youtube.com/watch?v=' + videoId;
    // const httpOptions = {     
    //   responseType: 'json',       
    //   headers: new HttpHeaders({        
    //     'Content-Type': 'application/json',
    //     'Authorization': 'my-auth-token'
    //   })
    // };
    // return this.http.get(url, httpOptions);
    return this.http.get(url, {responseType: 'json',       headers: new HttpHeaders({        
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Headers': 'access-control-allow-origin'
    })});
  }
}
