import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-product-info-modal",
  templateUrl: "./product-info-modal.component.html",
  styleUrls: ["./product-info-modal.component.scss"],
})
export class ProductInfoModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
