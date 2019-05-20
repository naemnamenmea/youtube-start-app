import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListHeaderComponent } from './video-list-header.component';

describe('VideoListHeaderComponent', () => {
  let component: VideoListHeaderComponent;
  let fixture: ComponentFixture<VideoListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
