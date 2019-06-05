
import { Component, OnInit, Input } from '@angular/core';
import { FormModalNewVideoComponent } from '../form-modal-new-video/form-modal-new-video.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VideoService } from '../../_services/video/video.service';
import { Video } from '../../_models/video/video.model';
import { ToolsService } from '../../_services/tools/tools.service';
import { Observable, forkJoin } from 'rxjs';

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
  ) { }

  ngOnInit() {
    this.videoService.refreshList();
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalNewVideoComponent);
    modalRef.result.then((video: Video) => {
      this.videoService.addVideo(video).
        toPromise().then(res => {
          this.videoService.refreshList();
        }).catch(err => {
          let error_msg = 'Unknown error';
          if (err.status == 409) {
            error_msg = 'Video already exists';
          } else if (err.status = 404) {
            error_msg = 'Video not found';
          }
          this.toastr.warning(error_msg, 'Trying to add new video...')
        });
    }, reason => null).catch((error) => {
      this.toastr.warning('Wrong url', 'Trying to add new video...')
    });
  }
}