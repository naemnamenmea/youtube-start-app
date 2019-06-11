import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { VideoService } from 'src/app/_services/video/video.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { ConfirmRemoveVideoComponent } from 'src/app/_components/confirm-remove-video/confirm-remove-video.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Video } from 'src/app/_models/video/video.model';

@Component({
  selector: 'app-video-list-body',
  templateUrl: './video-list-body.component.html',
  styleUrls: ['./video-list-body.component.scss']
})
export class VideoListBodyComponent implements OnInit {
  constructor(
    // private activeModal: NgbActiveModal,
    private service: VideoService,
    private _modalService: NgbModal,
    private toastr: ToastrService,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {

  }

  openDelConfirm(video: Video) {
    const modalRef = this._modalService.open(ConfirmRemoveVideoComponent);
    modalRef.componentInstance.video = video;
  }

  vote(videoId: number) {
    var vote: number = 228;
    this.service.sendVote(videoId, vote).toPromise().then(res => console.log(res))
      .catch(err => console.log(err));
  }

}
