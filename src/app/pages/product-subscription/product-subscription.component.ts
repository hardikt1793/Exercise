import { Component, OnInit } from "@angular/core";
import { ProductSubscriptionService } from "src/app/services/product-subscription.service";
import { MatDialog } from "@angular/material/dialog";
import { ProductInfoModalComponent } from "src/app/modal/product-info-modal/product-info-modal.component";

@Component({
  selector: "app-product-subscription",
  templateUrl: "./product-subscription.component.html",
  styleUrls: ["./product-subscription.component.scss"],
})
export class ProductSubscriptionComponent implements OnInit {
  // hold the products list
  products: any[];

  constructor(
    private productSubscriptionService: ProductSubscriptionService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProductSubscription();
  }

  /**
   * Get product subscription list.
   */
  getProductSubscription(): void {
    this.productSubscriptionService.getProductSubscription().subscribe({
      next: (res: any) => {
        if (res) {
          this.products = res.products;
        }
      },
      error: (error) => {
        console.error("Error Fetching product subscription", error);
      },
    });
  }

  /**
   * Open product subscription information popup.
   *
   * @param product - Selected product details.
   * @param selectedPlan - Selected plan details.
   */
  selectedProduct(product, selectedPlan): void {
    this.dialog.open(ProductInfoModalComponent, {
      autoFocus: false,
      width: "400px",
      data: { product: product, selectedPlan: selectedPlan },
    });
  }
}
