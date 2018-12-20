import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '../../models/storesModel';
import { StoresService } from '../../services/stores/stores.service';
import { ActivatedRoute } from '@angular/router';
import { AllStoresFromService } from '../../admin/stores/stores.component';

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.css']
})
export class UpdateStoreComponent implements OnInit {
  error = '';
  id: number;
  storeName:string;
  streetAddress:string;
  storeState:string;
  storeCity:string;
  storeZip:string;
  storePhone:string;
  storeHours:string;
  
  store: Store = {
    id: 0,
    storeName: '',
    streetAddress: '',
    storeState: '',
    storeCity: '',
    storeZip: 0,
    storePhone: '',
    storeHours: '',
  };
  stores = [];


  constructor(private router: Router,
    private storesservice: StoresService,
    route: ActivatedRoute

  ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.findOneStoreNow(this.id);
  }

  findOneStoreNow(id) {
    this.storesservice.findOneStore(id)
      .subscribe(
        storeObjfromServer => {
          this.store = storeObjfromServer.store;
          console.log(this.store);
          // console.log(this.store.storeName);
          // console.log(this.store.storeState);
        },
        error => {
          this.error = error;
        });
  }

  updateStore(id, storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours) {
    this.storesservice.updateStore(id, storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours)
      .subscribe(
        data => {
          console.log(this.stores)
        },
        error => {
          this.error = error;
          console.log(this.error)
        });
        this.storesservice.getStores().subscribe((Store: AllStoresFromService) => {
          this.stores = Store.stores
      console.log(this.stores)
      this.router.navigate([`/admin/storesadmin`]);
    // })
  })
  }
}