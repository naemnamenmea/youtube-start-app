
import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from 'src/app/shared/video.service';
import { FormModalNewVideoComponent } from '../form-modal-new-video/form-modal-new-video.component';
import { Video } from '../../shared/video.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToolsService } from 'src/app/shared/tools.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-video-list-header',
  templateUrl: './video-list-header.component.html',
  styleUrls: ['./video-list-header.component.scss']
})

export class VideoListHeaderComponent implements OnInit {

  constructor(
    private videoService: VideoService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private net: ToolsService
  ) {}

  ngOnInit() {
    this.videoService.refreshList();
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalNewVideoComponent);
    modalRef.result.then((res: any) => {
      let params = this.net.getParamsURL(res.url);
      let videoId = this.net.getValueByKeyFromURL(params, "v");
      this.videoService.addVideo(videoId).
        toPromise().then(res => {
          this.videoService.refreshList();
        }).catch(err => {
          let error_msg = 'Unknown error';
          if(err.status == 409) {
            error_msg = 'Video already exists';
          } else if(err.status = 404) {
            error_msg = 'Video not found';
          }
          this.toastr.warning(error_msg, 'Trying to add new video...')
        });
    }, (reason) => {}).catch((error) => {
      this.toastr.warning('Wrong url', 'Trying to add new video...')
    });
  }
}

// "thumbnail_url": "https://i.ytimg.com/vi/cS0NScCcFSY/hqdefault.jpg",
// "title": "Connect mysql with ASP.NET Core",
// "html": "\n<iframe width=\" 480\" height=\"270\" src=\"https://www.youtube.com/embed/cS0NScCcFSY?feature=oembed\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe>\n",
