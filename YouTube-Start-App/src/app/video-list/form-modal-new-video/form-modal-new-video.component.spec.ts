import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalNewVideoComponent } from './form-modal-new-video.component';

describe('FormModalNewVideoComponent', () => {
  let component: FormModalNewVideoComponent;
  let fixture: ComponentFixture<FormModalNewVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModalNewVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModalNewVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
