import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoService } from '../../_services/video/video.service';
import { ToolsService } from '../../_services/tools/tools.service';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Video } from 'src/app/_models/video/video.model';

@Component({
  selector: 'app-form-modal-new-video',
  templateUrl: './form-modal-new-video.component.html',
  styleUrls: ['./form-modal-new-video.component.scss']
})
export class FormModalNewVideoComponent implements OnInit {

  @Input() myForm: FormGroup;
  typing: boolean;
  currentUrl: string;
  video: Video;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private net: ToolsService,
    private service: VideoService
  ) {
    this.createForm();
  }

  ngOnInit() {

  }

  tryUpdateNewVideoInfo(delay: number) {
    let url = this.net.getParamsURL(this.myForm.get('url').value);
    if (url == this.currentUrl)
      return null;
      
    this.currentUrl = url;
    let videoId = this.net.getValueByKeyFromURL(url, "v");
    this.service.getNoembedYoutubeVideo(videoId)
      .toPromise().then((noembedItem) => {
        if (noembedItem.hasOwnProperty('error'))
          throw 'invalid id';
        this.video = {
          id: videoId,
          title: noembedItem['title'],
          grade: null,
          posted_date: new Date(),
          thumbnail: noembedItem['thumbnail_url']
        };
        this.myForm.patchValue({ title: this.video.title });
      }).catch(err => {
        console.log('GJ');
        this.video = null;
        this.myForm.patchValue({ title: '' });
      });

    setTimeout(() => {
      let url = this.net.getParamsURL(this.myForm.get('url').value);
      if (url != this.currentUrl) {
        this.tryUpdateNewVideoInfo(0);
      }
      this.typing = false;
    }, delay);
  }

  tryGetVideo() {
    if (!this.typing) {
      this.typing = true;
      this.tryUpdateNewVideoInfo(822);
    }
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      url: ['', Validators.required],
      title: ['']
    });
  }

  private submitForm() {
    this.activeModal.close(this.video);
  }

  closeModal() {
    this.activeModal.dismiss('Modal Dismissed');
  }

}
