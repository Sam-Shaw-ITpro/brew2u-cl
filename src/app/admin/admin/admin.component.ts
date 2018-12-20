import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  error = '';
  username:string;
  password:string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  login(username, password) {
    this.authenticationService.login(username, password)
      .subscribe(
        data => {
          this.router.navigate([`/admin/orderadmin`]);
        },
        error => {
          this.error = error;
        });

  }

}
