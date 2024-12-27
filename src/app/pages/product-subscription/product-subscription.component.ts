import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductSubscriptionService } from 'src/app/services/product-subscription.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductInfoModalComponent } from 'src/app/modal/product-info-modal/product-info-modal.component';

@Component({
  selector: 'app-product-subscription',
  templateUrl: './product-subscription.component.html',
  styleUrls: ['./product-subscription.component.scss']
})
export class ProductSubscriptionComponent implements OnInit {
  products: any[];

  @ViewChild('productInfo', { static: true }) productInfo: TemplateRef<any>;

  constructor(private productSubscriptionService: ProductSubscriptionService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProductSubscription();
  }

  /**
   * Get product subscription list.
   */
  getProductSubscription() {
    this.productSubscriptionService.getProductSubscription().subscribe((res: any) => {
      if (res) {
        this.products = res.products;
      }
    });
  }

  /**
   * Open product subscription information popup.
   * 
   * @param product - Selected product details.
   * @param selectedPlan - Selected plan details.  
   */
  selectedProduct(product, selectedPlan) {
    this.dialog.open(ProductInfoModalComponent, {
      autoFocus: false,
      width: '400px',
      data: {product: product, selectedPlan: selectedPlan}
    })
  }
}
