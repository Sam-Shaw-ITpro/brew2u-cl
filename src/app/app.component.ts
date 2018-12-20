import { Component, HostListener } from '@angular/core';
import { AuthenticationService } from '../app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'brew2u';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  logout() {
    this.authenticationService.logout();
    localStorage.getItem('user');
    this.router.navigate([`/home`]);
    window.alert("LOGGED OUT");
  }
}
