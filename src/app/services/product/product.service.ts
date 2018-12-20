import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../models/productModel';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class ProductService {

  private products: Product[];

  constructor(
    private http: HttpClient
  ) {
    this.products = [
      { id: 1, drinkName: "White Chocolate Mocha", price: 3.99, drinkSize: "S", drinkDescription: "Chocolate/Coffee Goodness" },
      { id: 2, drinkName: "White Chocolate Mocha", price: 4.99, drinkSize: "M", drinkDescription: "Chocolate/Coffee Goodness" },
      { id: 3, drinkName: "White Chocolate Mocha", price: 5.99, drinkSize: "L", drinkDescription: "Chocolate/Coffee Goodness" },
      { id: 4, drinkName: "Plain Black Coffee", price: 2.49, drinkSize: "S", drinkDescription: "Black like coal" },
      { id: 5, drinkName: "Plain Black Coffee", price: 2.99, drinkSize: "M", drinkDescription: "Black like coal" },
      { id: 6, drinkName: "Plain Black Coffee", price: 3.49, drinkSize: "L", drinkDescription: "Black like coal" },
      { id: 7, drinkName: "Frappucino", price: 5.99, drinkSize: "S", drinkDescription: "I don't knw what this is" },
      { id: 8, drinkName: "Frappucino", price: 6.99, drinkSize: "M", drinkDescription: "I don't knw what this is" },
      { id: 9, drinkName: "Frappucino", price: 7.99, drinkSize: "L", drinkDescription: "I don't knw what this is" },
      { id: 10, drinkName: "Iced Coffee", price: 4.99, drinkSize: "S", drinkDescription: "Iced Coffee" },
      { id: 11, drinkName: "Iced Coffee", price: 5.99, drinkSize: "M", drinkDescription: "Iced Coffee" },
      { id: 12, drinkName: "Iced Coffee", price: 6.99, drinkSize: "L", drinkDescription: "Iced Coffee" },
      { id: 13, drinkName: "Iced Tea", price: 2.99, drinkSize: "S", drinkDescription: "Iced Tea" },
      { id: 14, drinkName: "Iced Tea", price: 3.99, drinkSize: "M", drinkDescription: "Iced Tea" },
      { id: 15, drinkName: "Iced Tea", price: 4.99, drinkSize: "L", drinkDescription: "Iced Tea" },
    ];
  }

  



  findAll(): Product[] {
    return this.products;
  }

  find(id: number): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: number) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}

