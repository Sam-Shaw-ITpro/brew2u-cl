import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/userModel';
import { Observable } from 'rxjs';
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
export class UserService {
  userSecondAddress: string = '';
  isAdmin: boolean = false;
  users = [];
  user: User;

  constructor(private http: HttpClient) {
  }

// https://brew2userver.herokuapp.com/user/signup
// https://brew2u-server.herokuapp.com/user/signup

  register(email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState, userZipcode, phoneNumber, isAdmin) {
    return this.http.post<any>(`https://brew2u-server.herokuapp.com/user/signup`, { user: { email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState, userZipcode, phoneNumber, isAdmin } })
      .pipe(map(user => {
        if (user && user) {
          localStorage.setItem('token', user.sessionToken);
        }
        return user;
      }));
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`https://brew2u-server.herokuapp.com/user/allusers`, httpOptions)
  }

  deleteUser(id) {
    return this.http.delete<any>(`https://brew2u-server.herokuapp.com/user/delete/${id}`, httpOptions)
  }

  getOneUser(id): Observable<any> {
    return this.http.get<any>(`https://brew2u-server.herokuapp.com/user/info/${id}`, httpOptions)
  }
  
  updateUser(id, email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState, userZipcode, phoneNumber, isAdmin): Observable<User[]> {
    return this.http.put<User[]>(`https://brew2u-server.herokuapp.com/user/update/${id}`,{ user: { id, email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState, userZipcode, phoneNumber, isAdmin } }, httpOptions)
  }
}
