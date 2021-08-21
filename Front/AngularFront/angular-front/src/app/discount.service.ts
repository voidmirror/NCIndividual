import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Position } from './Position';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  private discountLink: string = 'https://localhost:8443/rest/v1/discounts'

  constructor(private http: HttpClient) { }

  public addWareDiscount(pos: Position, discountName: string) {
    let discountChanger = {
      'position' : pos,
      'discountName' : discountName
    }

    return this.http.post(this.discountLink + '/ware', discountChanger).subscribe();
  }

  public addUserDiscount(username: String, discountName: string) {
    let discountChanger = {
      'username' : username,
      'discountName' : discountName
    }

    return this.http.post(this.discountLink + '/user', discountChanger).subscribe();
  }

  public deleteWareDiscounts(pos: Position) {
    return this.http.post(this.discountLink + '/ware/delete', pos).subscribe();
  }

}
