import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoService } from '../shared/video.service';

@Component({
  selector: 'app-form-modal-new-video',
  templateUrl: './form-modal-new-video.component.html',
  styleUrls: ['./form-modal-new-video.component.scss']
})
export class FormModalNewVideoComponent implements OnInit {

  @Input() id: number;
  myForm: FormGroup;
  name = new FormControl('');

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private service: VideoService
  ) {

    this.createForm();
  }

  ngOnInit() {
    
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      url: ['', Validators.required],
      title: ['']
    });
  }
  
  private submitForm() {
	//this.service.addVideo(this.myForm);
    this.activeModal.close(this.myForm.value);
  }

 insertRecord() {
    
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
