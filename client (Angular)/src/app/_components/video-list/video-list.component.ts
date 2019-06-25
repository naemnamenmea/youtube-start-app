import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from 'src/app/_services';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  constructor(
    private videoService: VideoService
    ) { }

  ngOnInit() {    
    this.videoService.refreshList();
  }
  


}
