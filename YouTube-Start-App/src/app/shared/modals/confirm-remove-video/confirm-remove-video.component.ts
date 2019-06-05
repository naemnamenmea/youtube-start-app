import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoService } from '../../video/video.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Video } from '../../video/video.model';

@Component({
  selector: 'app-confirm-remove-video',
  templateUrl: './confirm-remove-video.component.html',
  styleUrls: ['./confirm-remove-video.component.scss']
})
export class ConfirmRemoveVideoComponent implements OnInit {

  @Input() public video: Video;

  constructor(
    public modal: NgbActiveModal,
    private service: VideoService,
    private _modalService: NgbModal,
    private toastr: ToastrService,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
  }

  removeVideo() {
    this.service.removeVideo(this.video.id).subscribe(res => {
      this.toastr.warning('Delete successfully', 'Trying to delete video...')
      this.service.refreshList();
    });
    this.modal.close('Ok click');
  }

}
