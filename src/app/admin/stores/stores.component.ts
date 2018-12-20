import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';
import { Store } from '../../models/storesModel';
import { AllStoresFromService } from '../../admin/stores/stores.component';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  error = '';
  store: Store[];
   
  constructor(private router: Router,
    private storesservice: StoresService,
     ) { }

  ngOnInit() {
    this.displayStores()
  }

  gotoUpdate(id) {
    this.router.navigate([`/admin/updatestoreadmin`, { id: id } ]);
  }

  addStore() {
    this.router.navigate([`/admin/addstoresadmin`]);
  }

  displayStores(): void {
    this.storesservice.getStores().subscribe((Store: AllStoresFromService) => {
      this.store = Store.stores
      console.log(this.store)
    })
  }

  deleteStore(id): void {
    this.storesservice.deleteStore(id)
      .subscribe(Store => {
        this.store = Store;
        console.log('delete store are we ever here');
        this.displayStores();
      },
        error => {
          this.error = error;
          this.displayStores();
        });
  }
}


export interface AllStoresFromService {
  stores:Store[]
}