import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/video.service';
import { ToastrService } from 'ngx-toastr';
import { EmbedVideoService } from 'ngx-embed-video';
import { DatePipe } from '@angular/common' 

@Component({
  selector: 'app-video-list-body',
  templateUrl: './video-list-body.component.html',
  styleUrls: ['./video-list-body.component.scss']
})
export class VideoListBodyComponent implements OnInit {
  


  constructor(
    private service: VideoService,
    private toastr: ToastrService,
    private embedService: EmbedVideoService,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
    
  }

  retriveVideoFrame(videoURL :string) {
    return this.embedService.embed(videoURL, {
      query: {},
      attr: {width: '100%', height: '100%'}
    }); 
  }  

  removeVideo(url: string) {
    if (confirm("Вы действительно хотите удалить данный материал?")) {
      this.service.removeVideo(url).subscribe(res => {
        this.toastr.warning('Delete successfully', 'Video DB')
        this.service.refreshList();
      });
    }
  }

}
