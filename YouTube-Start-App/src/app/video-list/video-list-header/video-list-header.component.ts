
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
      let params = this.net.getParamsURL(res.url);
      let videoId = this.net.getValueByKeyFromURL(params, "v");
      this.videoService.addVideo(videoId).
        subscribe(res => {
          this.videoService.refreshList();
        });
      // this.videoService.getVideoById(videoId).toPromise().then(videoJSON => {        
      //   if (videoJSON.hasOwnProperty('error')) {
      //     throw 'Такого видео не существует.';
      //   }
      //   let video = {
      //     id: videoId,
      //     posted_date : new Date(),
      //     title : videoJSON['title'],
      //     thumbnail : videoJSON['thumbnail']
      //   } as Video;
      //   this.videoService.addVideo(video);
      // }).catch(error => {
      //   console.log(error);
      // });
    }).catch((error) => {
      console.log('Возникли проблемы с закрытием модального окна. Ошибка: ', error);
    });
  }
}

// "thumbnail_url": "https://i.ytimg.com/vi/cS0NScCcFSY/hqdefault.jpg",
// "title": "Connect mysql with ASP.NET Core",
// "html": "\n<iframe width=\" 480\" height=\"270\" src=\"https://www.youtube.com/embed/cS0NScCcFSY?feature=oembed\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe>\n",
