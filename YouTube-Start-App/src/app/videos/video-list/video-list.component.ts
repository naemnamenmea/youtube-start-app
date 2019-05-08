import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  constructor(private service : VideoService) { }

  ngOnInit() {    
    this.service.refreshList();
  }

}
