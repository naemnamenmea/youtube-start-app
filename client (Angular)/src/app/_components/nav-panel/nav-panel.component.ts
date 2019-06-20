import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss']
})
export class NavPanelComponent implements OnInit {
  
  title = 'YouTube-Start-App';
  currentUser: any;

  constructor(    
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
