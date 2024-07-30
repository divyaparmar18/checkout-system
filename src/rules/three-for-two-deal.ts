import { PricingRule } from "../interfaces/price.interface";

export class ThreeForTwoDeal implements PricingRule {
  private item: string;
  private price: number;

  constructor(item: string, price: number) {
    this.item = item;
    this.price = price;
  }

  apply(item: string, quantity: number, currentTotal: number): number {
    if (item === this.item) {
      const sets = Math.floor(quantity / 3);
      const remainder = quantity % 3;
      return sets * 2 * this.price + remainder * this.price;
    }
    return currentTotal;
  }
}
