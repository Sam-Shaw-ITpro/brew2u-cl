import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '../../models/storesModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `${localStorage.token}`,
  })
};

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  error = '';
  stores = []
  store: Store

  constructor(
    private http: HttpClient,
  ) { }

  getStores(): Observable<any> {
    return this.http.get<any>(`https://brew2userver.herokuapp.com/store/showall`)
  }

  // getStores(): Observable<Store[]> {
  //   return this.http.get<Store[]>(`https://brew2userver.herokuapp.com/store/showall`)
  // }


  findOneStore(id: number): Observable<any> {
    return this.http.get<any>(`https://brew2userver.herokuapp.com/store/show/${id}`, httpOptions);
   }

  updateStore(id, storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours) {
    return this.http.put<Store[]>(`https://brew2userver.herokuapp.com/store/update/${id}`, { store: { storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours } }, httpOptions)
  }

  addstore(storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours) {
    return this.http.post<any>(`https://brew2userver.herokuapp.com/store/create`,
     { store: { storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours } }, httpOptions)
  }

  deleteStore(id) {
    return this.http.delete<any>(`https://brew2userver.herokuapp.com/store/delete/${id}`, httpOptions)
  }
}