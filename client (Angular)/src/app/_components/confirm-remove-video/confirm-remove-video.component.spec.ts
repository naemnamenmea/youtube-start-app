import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRemoveVideoComponent } from './confirm-remove-video.component';

describe('ConfirmRemoveVideoComponent', () => {
  let component: ConfirmRemoveVideoComponent;
  let fixture: ComponentFixture<ConfirmRemoveVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmRemoveVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRemoveVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
