import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/userModel';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username:string;
  password:string;
  error = '';
  user: User = {
    id: 0,
    email: "",
    password: "",
    username: "",
    userAddress: "",
    userSecondAddress: "",
    userState: "",
    userCity: "",
    userZipcode: 0,
    phoneNumber: "",
    firstName: "",
    lastName: "",
    isAdmin: false,
    drink: [],
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userservice: UserService,
  ) { }


  login(username, password) {
    this.authenticationService.login(username, password)
      .subscribe(
        user => {
          this.router.navigate([`/menu`]);
        },
        error => {
          this.error = error;
        });

  }
}
