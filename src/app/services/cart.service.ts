import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addToCart(payload:any) {
    console.log(payload);
    return this.http.post(`https://online-food-order-nf2n.onrender.com/api/v1/cart`, payload);
  }
  getCartItems(id:string) {
    return this.http.get(`https://online-food-order-nf2n.onrender.com/api/v1/cart/${id}`);
  }
  increaseQty(payload:any) {
    return this.http.post(`https://online-food-order-nf2n.onrender.com/api/v1/cart`, payload);
  }
  emptyCart(id:string) {
    return this.http.delete(`https://online-food-order-nf2n.onrender.com/api/v1/cart/${id}`);
  }
}
