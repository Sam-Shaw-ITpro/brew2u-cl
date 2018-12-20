import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/productModel';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  // id: number; 
  // drinkName: string;
  // price: number;
  public products: Product[];

  constructor(private router: Router,
    private productservice: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productservice.findAll();
    // console.log(this.products)
  }

  clearCart() {
    localStorage.removeItem('cart');
  }
}
