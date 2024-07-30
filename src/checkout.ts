import { ProductPrices } from "./constants/price";
import { PricingRule } from "./interfaces/price.interface";

export class Checkout {
  private items: Map<string, number> = new Map();
  private pricingRules: PricingRule[];

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
  }

  scan(item: string): void {
    const count = this.items.get(item) || 0;
    this.items.set(item, count + 1);
  }

  total(): number {
    let total = 0;
    for (const [item, quantity] of this.items) {
      const price = ProductPrices[item];
      if (price !== undefined) {
        let itemTotal = price * quantity;
        for (const rule of this.pricingRules) {
          itemTotal = rule.apply(item, quantity, itemTotal);
        }
        total += itemTotal;
      }
    }
    return total;
  }
}
