import { Injectable } from '@angular/core';
import { Video, UserRelatedVideoInfo } from '../../_models/video/video.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class VideoService {
  videoList: UserRelatedVideoInfo[];
  readonly videosController = 'videos';
  readonly videosAPI = environment.serverURL + '/api/' + this.videosController;
  // actions
  readonly titleAction = 'gettitle';
  readonly topAction = 'top';
  readonly infoAction = 'info';
  readonly voteAction = 'vote';
  readonly latestAction = 'latest';

  constructor(
    private http: HttpClient
  ) { }

  getAllVideos() {
    return this.http.get<Video[]>(this.videosAPI);
  }

  getAllVideosWithInfo() {
    return this.http.get<UserRelatedVideoInfo[]>(this.videosAPI + '/' + this.infoAction);
  }

  refreshList() {
    this.getAllVideosWithInfo().toPromise().then(res => {
      this.videoList = res;
      console.log(this.videoList);
      console.log(typeof this.videoList[0].IsModifiable);
    }).catch(e => console.log(e));
  }

  sendVote(videoId: number, vote: number) {
    return this.http.get<UserRelatedVideoInfo>(this.videosAPI + '/' + this.voteAction + '?id=' + videoId + '&vote=' + vote);
  }

  addVideo(video: Video) {
    return this.http.post(this.videosAPI, video);
  }

  getNoembedYoutubeVideo(videoId: string) {
    return this.http.get<any>('https://noembed.com/embed?url=https://www.youtube.com/watch?v=' + videoId);
  }

  removeVideo(videoId: number) {
    return this.http.delete(this.videosAPI + '/' + videoId);
  }

  showLastVideos() {
    return this.http.get<UserRelatedVideoInfo[]>(this.videosAPI + '/' + this.latestAction)
      .subscribe(res => this.videoList = res);
  }

  showTopVideos(num: number = 10) {
    return this.http.get<UserRelatedVideoInfo[]>(this.videosAPI + '/' + this.topAction + '/' + num)
      .subscribe(res => this.videoList = res);
  }
}