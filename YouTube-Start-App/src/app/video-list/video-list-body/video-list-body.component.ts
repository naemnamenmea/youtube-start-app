import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/video.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common' 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-list-body',
  templateUrl: './video-list-body.component.html',
  styleUrls: ['./video-list-body.component.scss']
})
export class VideoListBodyComponent implements OnInit {
  constructor(
    private service: VideoService,
    private toastr: ToastrService,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
    
  }

  removeVideo(url: string) {    
    if (confirm("Вы действительно хотите удалить данный материал?")) {
      this.service.removeVideo(url).subscribe(res => {
        this.toastr.warning('Delete successfully', 'Trying to delete video...')
        this.service.refreshList();
      });
    }
  }

}
