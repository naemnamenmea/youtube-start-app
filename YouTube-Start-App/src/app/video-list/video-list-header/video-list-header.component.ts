
import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/video.service';
import { FormModalNewVideoComponent } from '../../form-modal-new-video/form-modal-new-video.component';
import { Video } from '../../shared/video.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-list-header',
  templateUrl: './video-list-header.component.html',
  styleUrls: ['./video-list-header.component.scss']
})

export class VideoListHeaderComponent implements OnInit { 

  constructor(
    private service: VideoService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.service.refreshList();
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalNewVideoComponent);

    modalRef.result.then((result: Video) => {
      if (!this.service.existsVideo(result.id)) {
        throw 'url ( ' + result.id + ' ) doen`t exists';
      }
      console.log('Exists');
      result.postedDate = new Date();
      this.service.addVideo(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
