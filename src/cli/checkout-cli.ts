import * as readline from "readline";
import { ThreeForTwoDeal } from "../rules/three-for-two-deal";
import { ProductPrices } from "../constants/price";
import { BulkDiscount } from "../rules/bulk-discount";
import { Checkout } from "../checkout";

// Define your pricing rules
const pricingRules = [
  new ThreeForTwoDeal("atv", ProductPrices.atv),
  new BulkDiscount("ipd", 4, 499.99, ProductPrices.ipd),
];

// Create a readline interface for command-line input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const co = new Checkout(pricingRules);

// Function to handle user input
const handleInput = (input: string) => {
  const items = input.split(",").map((item) => item.trim());
  items.forEach((item) => co.scan(item));
  console.log(`Total: $${co.total().toFixed(2)}`);
  rl.close();
};

// Prompt the user for input
rl.question(
  "Enter scanned items (comma-separated, e.g., atv,ipd,ipd): ",
  handleInput
);
