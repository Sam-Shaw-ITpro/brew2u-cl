import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';
import { AllStoresFromService } from '../../admin/stores/stores.component';

@Component({
  selector: 'app-display-stores',
  templateUrl: './display-stores.component.html',
  styleUrls: ['./display-stores.component.css']
})
export class DisplayStoresComponent implements OnInit {
  error = '';
  store=[]

  constructor(private router: Router,
    private storesservice: StoresService,
     ) { }

  ngOnInit() {
    this.displayStores()

  }
  
  displayStores(): void {
    this.storesservice.getStores().subscribe((Store: AllStoresFromService) => {
      this.store = Store.stores
      console.log(this.store)
    })
  }
}
