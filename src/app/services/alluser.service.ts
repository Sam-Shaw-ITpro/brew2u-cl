import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { User } from '../models/userModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AllUsersFromService } from '../admin/user-admin/user-admin.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `${localStorage.token}`,
  })
};

console.log('in allusers service', localStorage.token);

@Injectable({
  providedIn: 'root'
})
export class AlluserService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<AllUsersFromService> {
    return this.http.get<AllUsersFromService>(`https://brew2userver.herokuapp.com/user/allusers`, httpOptions)
  }


}


