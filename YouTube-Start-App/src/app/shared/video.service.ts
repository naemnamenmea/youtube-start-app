import { Injectable } from '@angular/core';
import { Video } from './video.model';
import { HttpClient } from '@angular/common/http';
import { EmbedVideoService } from 'ngx-embed-video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  video: Video;
  videoList: Video[];
  readonly youtubeURL = 'https://www.youtube.com';
  readonly rootURL = 'http://localhost:58965/api';
  // readonly rootURL = 'https://localhost:44326/api';
  readonly videosController = 'videos';

  constructor(
    private http: HttpClient,
    private embedService: EmbedVideoService
  ) {
    // let video_id = "jYvkMv7LzCw";
    // this.http.get("http://www.youtube.com/oembed?url=https://www.youtube.com/watch?v="
    //   + video_id + "&format=json").subscribe(res => {
    //     console.log(res);
    //   });

    this.testConnection();    
  }


  testConnection() {
    this.http.get(this.rootURL + '/' + this.videosController)
    .toPromise().then(res => {
      console.log('Connection established! =)');
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

  getVideoById(videoId: string) {
    let url = 'https://www.youtube.com/watch?v=' + videoId;
    let res = this.embedService.embed(url, {
      query: {},
      attr: { width: '100%', height: '100%' }
    });
    //console.log(res);
    // let http : HttpClient;
    // console.log(http.get('https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w?feature=embeds_subscribe_title'));
    return res;
  }

  top(num: number = 10) {

  }
}
