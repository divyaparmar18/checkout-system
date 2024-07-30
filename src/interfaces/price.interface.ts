export interface PricingRule {
  apply(item: string, quantity: number, currentTotal: number): number;
}
