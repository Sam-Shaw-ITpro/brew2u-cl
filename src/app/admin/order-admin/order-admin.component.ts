import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { Drink } from '../../models/drinkModel';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {
  error = '';
  drink:Drink[]

  constructor(private router: Router,
    private ordersservice: OrdersService
  ) { }

  ngOnInit() {
    this.displayAllorders()
  }

  displayAllorders(): void {
    this.ordersservice.getAllorders().subscribe((Drink: AllOrdersFromService) => {
      this.drink = Drink.drink
      console.log(this.drink)
    })
  }
} export interface AllOrdersFromService{
  drink:Drink[]
}