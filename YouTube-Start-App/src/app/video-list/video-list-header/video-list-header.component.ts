
import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/video.service';
import { FormModalNewVideoComponent } from '../../form-modal-new-video/form-modal-new-video.component';
import { Video } from '../../shared/video.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToolsService } from 'src/app/shared/tools.service';

@Component({
  selector: 'app-video-list-header',
  templateUrl: './video-list-header.component.html',
  styleUrls: ['./video-list-header.component.scss']
})

export class VideoListHeaderComponent implements OnInit {

  constructor(
    private videoService: VideoService,    
    private modalService: NgbModal,
    private net: ToolsService
  ) { }

  ngOnInit() {
    this.videoService.refreshList();
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalNewVideoComponent);
    modalRef.result.then((res: any) => {
      // console.log(this.net.getValueByKeyFromURL(res.url,'v'));
      // this.videoService.getVideo(this.net.getValueByKeyFromURL(res.url,'v'))
      // .toPromise().then(video => {
      //   console.log(video.title);
      // });
      
      let video = new Video()
      let params = this.net.getParamsURL(res.url);
      video.id = this.net.getValueByKeyFromURL(params, "v");
      if (!this.videoService.existsVideo(video.id)) {
        throw 'url ( ' + video.id + ' ) doen`t exists';
      }
      video.posted_date = new Date();
      this.videoService.addVideo(video);
    }).catch((error) => {
      console.log(error);
    });
  }
}
