import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent {
  
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
   ) {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate([`/home`]);
    window.alert("LOGGED OUT");
  }


}
