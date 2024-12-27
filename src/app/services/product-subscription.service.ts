import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductSubscriptionService {
  constructor(private httpClient: HttpClient) { }

  /**
   * Sends a GET request for fetching latest data from api.
   * 
   * @returns - Product subscription list.
   */
  getProductSubscription() {
    return this.httpClient.get('https://product-subscription.herokuapp.com/api/products');
  }
}
