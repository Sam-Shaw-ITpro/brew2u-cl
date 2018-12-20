import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Drink } from '../../models/drinkModel';
import { Observable } from "rxjs";
import { Order } from 'src/app/models/orderModel';
import { AllOrdersFromService } from 'src/app/admin/order-admin/order-admin.component';
import { OneUsersOrdersFromService, OneUsersOrders } from '../../components/user-profile/user-profile.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `${localStorage.token}`,
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  error = '';
  drinks = [];
  drink: Drink;
  constructor(
    private http: HttpClient,
  ) { }

  addorder(drinkName, price, drinkSize, drinkDescription) {
    return this.http.post<any>('https://brew2userver.herokuapp.com/drink/create',
      { drink: { drinkName, price, drinkSize, drinkDescription }}, httpOptions).subscribe();
  }

  getAllorders(): Observable<AllOrdersFromService> {
    return this.http.get<AllOrdersFromService>(`https://brew2userver.herokuapp.com/drink/alldrinks`, httpOptions)
  }

  getOrdersForOne(): Observable<any> {
    return this.http.get<any>(`https://brew2userver.herokuapp.com/drink/getall`, httpOptions)
  }

  // getOrdersForOne(): Observable<OneUsersOrders> {
  //   return this.http.get<OneUsersOrders>(`https://brew2userver.herokuapp.com/drink/alldrinks`, httpOptions)
  // }

  // getOrders(userID): Observable<OneUsersOrdersFromService> {
  //   return this.http.get<OneUsersOrdersFromService>(`https://brew2userver.herokuapp.com/user/${userID}/pastorders`, httpOptions)
  // }

  getOrders(userID): Observable<OneUsersOrdersFromService> {
    return this.http.get<OneUsersOrdersFromService>(`https://brew2userver.herokuapp.com/user/${userID}/pastorders`, httpOptions)
  }


  findOneProduct(id: number): Observable<Drink[]> {
    return this.http.get<Drink[]>(`https://brew2userver.herokuapp.com/drink/getdrink/${{ id }}`, httpOptions)
    }
 }
