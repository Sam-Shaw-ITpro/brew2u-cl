import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/userModel'
import { UserService } from '../../services/user/user.service';
import { AlluserService } from '../../services/alluser.service';


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  error = '';
  users:User[]
  isAdmin = false;
  email:string;
  username:string;
  password:string;
  firstName:string;
  lastName:string;
  userAddress:string;
  userSecondAddress:string;
  userCity:string;
  userState:string;
  userZipcode:number;
  phoneNumber:string;

  constructor(private router: Router,
    private alluserservice: AlluserService,
    private userservice: UserService,
  ) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers(): void {
    this.alluserservice.getUsers().subscribe((User: AllUsersFromService) => {
      this.users = User.data
      console.log('user admin ', this.users)
    })
  }

  register(email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState, userZipcode, phoneNumber, isAdmin) {
    this.userservice.register(email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState, userZipcode, phoneNumber, isAdmin)
      .subscribe(
        user => {
          // this.router.navigate([`admin/useradmin`]);
          window.alert("USER CREATED");
        },
        error => {
          this.error = error;
        }); 
  }

  deleteUser(id) : void {
    this.userservice.deleteUser(id)
      .subscribe(User => {
        this.users = User;
        console.log('delete user are we ever here');
        this.getAllUsers()
              },
        error => {
          this.error = error;
          this.getAllUsers()
        }); 
      } 
}
export interface AllUsersFromService {
  data:User[]
}