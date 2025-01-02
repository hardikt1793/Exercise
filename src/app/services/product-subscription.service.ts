import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product.model";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductSubscriptionService {
  constructor(private httpClient: HttpClient) {}

  //List of products
  private productList: Product[] = [
    {
      id: 1,
      name: "Silver",
      features: [
        "Create Custom Facebook Audiences from Lists",
        "Receive a List of Rejected Addresses",
        "3 cents off per postcard",
        "25 free postcards per month",
      ],
      plans: [
        {
          paymentInterval: "MONTH",
          priceCents: 2900,
        },
        {
          paymentInterval: "YEAR",
          priceCents: 27840,
        },
      ],
    },
    {
      id: 2,
      name: "Gold",
      features: ["All Silver features", "7 cents off per postcard"],
      plans: [
        {
          paymentInterval: "MONTH",
          priceCents: 7900,
        },
        {
          paymentInterval: "YEAR",
          priceCents: 75840,
        },
      ],
    },
    {
      id: 3,
      name: "Enterprise",
      features: [
        "All Platinum features",
        "12 cents off per postcard",
        "Share your discount with up to 50 additional users",
      ],
      plans: [
        {
          paymentInterval: "MONTH",
          priceCents: 49900,
        },
        {
          paymentInterval: "YEAR",
          priceCents: 479040,
        },
      ],
    },
    {
      id: 4,
      name: "Platinum",
      features: [
        "All Gold features",
        "10 cents off per postcard",
        "Share your discount with up to 25 additional users",
      ],
      plans: [
        {
          paymentInterval: "MONTH",
          priceCents: 29900,
        },
        {
          paymentInterval: "YEAR",
          priceCents: 287040,
        },
      ],
    },
  ];
  /**
   * Sends a GET request for fetching latest data from api.
   *
   * @returns - Product subscription list.
   */
  getProductSubscription(): Observable<{ products: Product[] }> {
    return of({ products: this.productList });
    // return this.httpClient.get('https://product-subscription.herokuapp.com/api/products');
  }
}
