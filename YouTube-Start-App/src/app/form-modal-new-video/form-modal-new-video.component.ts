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

  @Input() myForm: FormGroup;
  //@Input() url: String;
  //@Input() title: String;

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
    this.activeModal.close(this.myForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }  

}
