import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListBodyComponent } from './video-list-body.component';

describe('VideoListBodyComponent', () => {
  let component: VideoListBodyComponent;
  let fixture: ComponentFixture<VideoListBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
