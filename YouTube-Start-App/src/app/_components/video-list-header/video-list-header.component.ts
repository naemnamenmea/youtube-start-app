
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
    let alert_title='Добавление видео...';
    modalRef.result.then((video: Video) => {
      this.videoService.addVideo(video).
        toPromise().then(res => {
          this.toastr.success(res as string, alert_title);
          this.videoService.refreshList();
        }).catch(err => {                    
          this.toastr.warning(err, alert_title);
        });
    }, reason => null).catch((error) => {
      this.toastr.warning('Неверный url', alert_title);
    });
  }
}