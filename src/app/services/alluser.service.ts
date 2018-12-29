import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return this.http.get<AllUsersFromService>(`https://brew2u-server.herokuapp.com/user/allusers`, httpOptions)
  }


}


