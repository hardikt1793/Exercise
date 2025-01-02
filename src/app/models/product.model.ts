export interface Product {
  id: string | number;
  name: "Silver" | "Gold" | "Enterprise" | "Platinum";
  features: string[];
  plans: {
    paymentInterval: "MONTH" | "YEAR";
    interval?: string;
    priceCents: number;
  }[];
}
