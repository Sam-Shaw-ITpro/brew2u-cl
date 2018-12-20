import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';
import { Order } from 'src/app/models/orderModel';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/userModel';
import { Drink } from '../../models/drinkModel';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {
  userID = localStorage.getItem('user');
  error = '';
  orders = [];
  email: string;
  firstName: string;
  lastName: string;
  userAddress: string;
  userSecondAddress: string;
  userCity: string;
  userState: string;
  userZipcode: number;
  phoneNumber: string;
  password: string;
  username: string;
  isAdmin: boolean;
  drink: [];

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

  order: Order = {
    drinks: [],
    id: 0,
    email: '',
    password: '',
    username: '',
    userAddress: '',
    userSecondAddress: '',
    userState: '',
    userCity: '',
    userZipcode: 0,
    phoneNumber: '',
    firstName: '',
    lastName: '',
    isAdmin: false,
  };

  constructor(private router: Router,
    private orderservice: OrdersService,
    private userservice: UserService,
  ) { }

  ngOnInit() {
    this.getOneUser(this.userID);
  }

  getOneUser(userID): void {
    this.userservice.getOneUser(userID).subscribe(
        userObjFromserver => {       
          this.user = userObjFromserver.user;
          console.log(this.user)
             },
        error => {
          this.error = error;
        });
  }

  updateUser(id, email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState, userZipcode, phoneNumber, isAdmin) {
    this.userservice.updateUser(id, email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState, userZipcode, phoneNumber, isAdmin)
    .subscribe(
      data => {
      },
      error => {
        this.error = error;
        console.log(this.error)
      });  this.router.navigate([`/userprofile`]);
    }
  }
   
  // console.log(email, firstName, lastName, userAddress, userSecondAddress, userCity, userState ,userZipcode, phoneNumber);
  // then go to profile page. 

  // updateUser() {
  //   console.log('hello')
  // }



