import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoService } from '../shared/video.service';
import { ToolsService } from '../shared/tools.service';

@Component({
  selector: 'app-form-modal-new-video',
  templateUrl: './form-modal-new-video.component.html',
  styleUrls: ['./form-modal-new-video.component.scss']
})
export class FormModalNewVideoComponent implements OnInit {

  @Input() myForm: FormGroup;
  typing: boolean;

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

  trySetVideoTitle() {
    try {
      let params = this.net.getParamsURL(this.myForm.get('url').value);
      let videoId = this.net.getValueByKeyFromURL(params, "v");
      this.service.getTitle(videoId).
        toPromise().then((titleValue) => {
          this.myForm.patchValue({ title: titleValue });
        })
        .catch(err => { });
    } catch (err) {}

    setTimeout(() => {
      this.typing = false;
    }, 822);
  }

  tryVideoTitle() {
    if (!this.typing) {
      this.typing = true;
      this.trySetVideoTitle();
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
