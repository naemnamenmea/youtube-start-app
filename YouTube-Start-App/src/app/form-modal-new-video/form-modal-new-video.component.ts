import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoService } from '../shared/video.service';
import { ToolsService } from '../shared/tools.service';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-form-modal-new-video',
  templateUrl: './form-modal-new-video.component.html',
  styleUrls: ['./form-modal-new-video.component.scss']
})
export class FormModalNewVideoComponent implements OnInit {

  @Input() myForm: FormGroup;
  typing: boolean;
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

  // https://www.youtube.com/watch?v=EtH9Yllzjcc
  // https://www.youtube.com/watch?v=SXJEEqgaYWs

  trySetVideoTitle(delay: number) {
    try {
      let url = this.net.getParamsURL(this.myForm.get('url').value);
      if (url != this.currentUrl) {
        this.currentUrl = url;
        let videoId = this.net.getValueByKeyFromURL(url, "v");
        if (videoId.length != 11)
          throw 'invalid id';
        this.service.getTitle(videoId).
          toPromise().then((titleValue: string) => {
            this.myForm.patchValue({ title: titleValue });
          })
          .catch(err => { });
      }
    } catch (err) { }

    setTimeout(() => {
      let url = this.net.getParamsURL(this.myForm.get('url').value);
      if(url != this.currentUrl) {
        this.trySetVideoTitle(0);
      }
      this.typing = false;
    }, delay);
  }

  tryVideoTitle() {
    if (!this.typing) {
      this.typing = true;
      this.trySetVideoTitle(822);
    }
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      url: ['', Validators.required],
      title: ['']
    });
  }

  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }

  insertRecord() {

  }
  closeModal() {
    this.activeModal.dismiss('Modal Dismissed');
  }

}
