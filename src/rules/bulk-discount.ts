import { PricingRule } from "../interfaces/price.interface";

export class BulkDiscount implements PricingRule {
  private item: string;
  private threshold: number;
  private discountedPrice: number;
  private originalPrice: number;

  constructor(
    item: string,
    threshold: number,
    discountedPrice: number,
    originalPrice: number
  ) {
    this.item = item;
    this.threshold = threshold;
    this.discountedPrice = discountedPrice;
    this.originalPrice = originalPrice;
  }

  apply(item: string, quantity: number, currentTotal: number): number {
    if (item === this.item && quantity > this.threshold) {
      return (
        currentTotal -
        (quantity * this.originalPrice - quantity * this.discountedPrice)
      );
    }
    return currentTotal;
  }
}
