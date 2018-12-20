import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';
import { User } from '../../models/userModel';
import { UserService } from '../../services/user/user.service';
import { Order } from '../../models/orderModel';
import { AllOrdersFromService } from '../../admin/order-admin/order-admin.component';
import { Drink } from '../../models/drinkModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  drink:Drink[]
  order:Order[]
  error = '';
  drinks = [];
  userID = localStorage.getItem('user');
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

  Order: Order = {
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
    this.userID = localStorage.getItem('user');
    this.getUserInfo(this.userID);
    this.getUserOrders();
  }

  // getUserOrders(userID) : void {
  //   this.orderservice.getOrders(userID).subscribe((Drink) => {
  //     this.order = Drink
  //     console.log(this.order)
  //   })
  //   error => {
  //     this.error = error;
  //     console.log(this.error)
  //   };
  // }

  // getUserOrders(userID) : void {
  //   this.orderservice.getOrders(userID).subscribe((Order: OneUsersOrdersFromService) => {
  //     this.order = Order.data
  //   console.log('should be orders', this.order)
  //   })
  //   error => {
  //     this.error = error;
  //     console.log(this.error)
  //   }; 
  // }

  getUserOrders() : void {
    this.orderservice.getOrdersForOne().subscribe((OneUsersOrders) => {
      this.order = OneUsersOrders
    console.log('should be orders', this.order)
    })
    error => {
      this.error = error;
      console.log(this.error)
    }; 
  }

  getUserInfo(userID): void {
    this.userservice.getOneUser(userID).subscribe(
        userObjFromserver => {       
          this.user = userObjFromserver.user;
          console.log(this.user)
             },
        error => {
          this.error = error;
        });
  } 
}

// export interface OneUsersOrdersFromService{
//   drink:Drink[]
// }

export interface OneUsersOrdersFromService{
  data:Order[]
 }

 
export interface OneUsersOrders{
  drinks:Order[]
 }
