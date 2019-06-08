import { Injectable } from '@angular/core';
import { Video } from '../../_models/video/video.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  video: Video;
  videoList: Video[];
  readonly videosController = 'videos';
  readonly videosAPI = environment.serverURL + '/api/' + this.videosController;
  // actions
  readonly titleAction = 'gettitle';
  readonly topAction = 'top';
  readonly voteAction = 'vote';
  readonly latestAction = 'latest';

  constructor(
    private http: HttpClient
  ) { }

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

  sendVote(videoId: string, vote: number) {
    return this.http.get(this.videosAPI + '/' + this.voteAction + '?id=' + videoId + '&vote=' + vote);
  }

  addVideo(video: Video) {  
    return this.http.post(this.videosAPI, video);
  }

  getNoembedYoutubeVideo(videoId: string) {
    return this.http.get('https://noembed.com/embed?url=https://www.youtube.com/watch?v=' + videoId);
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
}