import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http : HttpClient) { }

  public contactUs(data: any):Observable<any>{
    return this.http.post('https://online-food-order-nf2n.onrender.com/api/v1/contact', data, {responseType: 'text'});
  }
}
