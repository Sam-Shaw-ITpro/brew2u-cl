import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, NgModel } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Store } from '../../models/storesModel';
import { StoresService } from '../../services/stores/stores.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent {
  error = '';
  storeState:string;
  storeCity:string;
  storeZip:number;
  storePhone:string;
  storeHours:string;
  storeName:string;
  streetAddress:string;

  constructor(private router: Router,
    private storesservice: StoresService,
    private http: HttpClient,
  ) { }

  
  addNewStore(storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours) {
    this.storesservice.addstore(storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours)
      .subscribe
      (
        data => {
          this.router.navigate([`/admin/storesadmin`]);
        },
        error => {
          this.error = error;
        });
      }
    }