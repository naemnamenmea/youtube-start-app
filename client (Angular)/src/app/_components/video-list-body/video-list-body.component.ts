import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/_services/video/video.service';
import { DatePipe } from '@angular/common'
import { ConfirmRemoveVideoComponent } from 'src/app/_components/confirm-remove-video/confirm-remove-video.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Video, UserRelatedVideoInfo } from 'src/app/_models/video/video.model';

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
    public datepipe: DatePipe
  ) { }

  ngOnInit() {

  }

  openDelConfirm(video: Video) {
    const modalRef = this._modalService.open(ConfirmRemoveVideoComponent);
    modalRef.componentInstance.video = video;
  }

  vote(video: UserRelatedVideoInfo, vote: any) {
    let videoId = video.id;
    this.service.sendVote(videoId, vote).toPromise().then(res => {
      video.isModifiable = false;
      let newAverageRating = res.avRating;
      if (typeof newAverageRating != "number")
        throw Error("newAverageRating is undefined");
      // console.log("vote: " + res + "; newAverageRating" + newAverageRating);
      var index = this.service.videoList.findIndex(x => x.id == videoId);
      this.service.videoList[index].avRating = newAverageRating;
    })
      .catch(err => console.log(err));
  }

}
