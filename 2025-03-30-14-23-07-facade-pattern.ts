/*
This file leverages the Facada Pattern.
*/

import {
  IUser,
  IProduct,
  FraudChecker,
  InventorySystem,
  ShippingCalculator,
  PaymentProcessor,
  USER,
  PRODUCT,
  ADDRESS,
} from "./2025-03-30-14-23-05-facade-pattern";

class OrderSystem {
  private paymentProcessor: PaymentProcessor;
  private inventorySystem: InventorySystem;
  private shippingCalculator: ShippingCalculator;
  private fraudChecker: FraudChecker;

  constructor() {
    this.paymentProcessor = new PaymentProcessor();
    this.inventorySystem = new InventorySystem();
    this.shippingCalculator = new ShippingCalculator();
    this.fraudChecker = new FraudChecker();
  }

  placeOrder(user: IUser, product: IProduct, address: string): boolean {
    // Check for fraud
    if (!this.fraudChecker.verify(user)) {
      throw new Error("Fraud check failed");
    }

    // Check inventory
    if (!this.inventorySystem.checkStock(product)) {
      throw new Error("Product out of stock");
    }

    // Calculate shipping
    const shipping = this.shippingCalculator.compute(address);

    // Process payment
    const total = product.price + shipping;
    if (!this.paymentProcessor.charge(user, total)) {
      throw new Error("Payment failed");
    }

    return true;
  }
}

const orderSystem = new OrderSystem();
orderSystem.placeOrder(USER, PRODUCT, ADDRESS);
