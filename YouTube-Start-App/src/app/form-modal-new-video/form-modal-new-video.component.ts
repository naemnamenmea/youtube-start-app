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

<<<<<<< HEAD
  @Input() myForm: FormGroup;
  //@Input() url: String;
  //@Input() title: String;
=======
  @Input() id: number;
  myForm: FormGroup;
  name = new FormControl('');
>>>>>>> 9fad9b6f41358779d01dbcd899127b78edc73c90

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
<<<<<<< HEAD
    this.activeModal.close(this.myForm.value);
  }

=======
    //this.service.addVideo(this.myForm);
    this.activeModal.close(this.myForm.value);
  }

  insertRecord() {
    
  }

>>>>>>> 9fad9b6f41358779d01dbcd899127b78edc73c90
  closeModal() {
    this.activeModal.close('Modal Closed');
  }  

}
