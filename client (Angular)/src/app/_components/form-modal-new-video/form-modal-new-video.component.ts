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
  @Input() video: Video;
  typing: boolean = false;
  currentUrl: string;

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
    try {
      let url = this.net.getParamsURL(this.myForm.get('url').value);
      if (url != this.currentUrl) {
        this.currentUrl = url;
        let videoUrl = this.net.getValueByKeyFromURL(url, "v"); // Обработать исключение query == null
        if (videoUrl.length != 11)
          throw 'invalid id';
        this.service.getNoembedYoutubeVideo(videoUrl)
          .toPromise().then((noembedItem) => {
            if (noembedItem.hasOwnProperty('error'))
              throw 'invalid id';
            this.video = {
              videoId: videoUrl,
              title: noembedItem['title'],
              posted_date: new Date(),
              thumbnail: noembedItem['thumbnail_url']
            };
            this.myForm.patchValue({ title: this.video.title });
          }).catch(err => {
            this.video = null;
            this.myForm.patchValue({ title: '' });
          });
      }
    } catch (err) { // Убрать копипасту
      this.video = null;
      this.myForm.patchValue({ title: '' });
    }

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

  updateTmpTitle(new_title: string) {
    if (this.video)
      this.video.title = new_title;
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
