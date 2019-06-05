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
  readonly rootURL = 'https://localhost:44326/api';
  readonly videosController = 'videos';
  readonly videosAPI = this.rootURL + '/' + this.videosController;
  readonly titleAction = 'gettitle';
  readonly topAction = 'top';
  readonly latestAction = 'latest';

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

  // getVideo(videoId: string) {
  //   return this.http.get("https://noembed.com/embed?url=https://www.youtube.com/watch?v=" + videoId);
  // }

  getTitle(videoId: string) {
    return this.http.get(this.videosAPI + '/' + this.titleAction + "/" + videoId);
  }

  testConnection() {
    this.http.get(this.videosAPI)
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
    this.http.get(this.videosAPI)
      .subscribe(res => this.videoList = res as Video[]);
  }

  addVideo(videoId: string) {
    return this.http.post(this.videosAPI + "?videoId=" + videoId, null);
  }

  removeVideo(videoId: string) {
    return this.http.delete(this.videosAPI + '/' + videoId);
  }

  showLastVideos() {
    return this.http.get(this.videosAPI + '/' + this.latestAction)
    .subscribe(res => this.videoList = res as Video[]);
  }

  showTopVideos(num: number = 10) {
    return this.http.get(this.videosAPI + '/' + this.topAction + '/' + num)
    .subscribe(res => this.videoList = res as Video[]);
  }

  sortByData(order: boolean = false) {

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
    return this.http.get(url, {
      responseType: 'json', headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
        'Access-Control-Allow-Headers': 'access-control-allow-origin'
      })
    });
  }
}
