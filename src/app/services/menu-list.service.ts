import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor(private http: HttpClient) { }

  public getMenuList(id:string)
  {
    return this.http.get(`https://online-food-order-nf2n.onrender.com/api/v1/restaurants/${id}/menuList`);
  }

  public addMenuItem(_id:number,data:any)
  {
    return this.http.post(`https://online-food-order-nf2n.onrender.com/api/v1/restaurants/${_id}/menuList`,data);
  }

  public getRestaurantList(){
    return this.http.get(`https://online-food-order-nf2n.onrender.com/api/v1/restaurants`);
  }
}
