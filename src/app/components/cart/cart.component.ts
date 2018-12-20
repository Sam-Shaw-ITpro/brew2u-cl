import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/item.entity';
import { ProductService } from '../../services/product/product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  public items: Item[] = [];
  private total: number = 0;
  private delivery: number = 0;
  private Tax: number = 0;
  private subtotal: number = 0;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      if (id) {
        var item: Item = {
          product: this.productService.find(id),
          quantity: 1
        };
        if (localStorage.getItem('cart') == null) {
          let cart: any = [];
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          let cart: any = JSON.parse(localStorage.getItem('cart'));
          let index: number = -1;
          for (var i = 0; i < cart.length; i++) {
            let item: Item = JSON.parse(cart[i]);
            if (item.product.id == id) {
              index = i;
              break;
            }
          }
          if (index == -1) {
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            let item: Item = JSON.parse(cart[index]);
            item.quantity += 1;
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.loadCart();
      } else {

        ///sam just changed this
        this.loadCart();
      }
    });
  }

  loadCart(): void {
    this.total = 0;
    this.subtotal = 0;
    this.delivery = 3;
    this.Tax = 0;
    this.items = [];
    
    if (localStorage.getItem('cart') == null) {
  console.log('empty cart')
    } else {
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity,
      });
      this.subtotal += (item.product.price * item.quantity);
      this.Tax = (this.subtotal * .09);
      this.delivery = 3;
      this.total = this.Tax + this.subtotal + this.delivery;
    }
  }
  }

  remove(id: number): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }

  clearCart() {
    localStorage.removeItem('cart');
    this.loadCart();
  }

  submitCart() {
    this.router.navigate([`/checkout`]);
  }

  
}
