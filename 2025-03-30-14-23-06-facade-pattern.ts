/*
This file does NOT leverage the Facada Pattern.
*/

import {
  FraudChecker,
  InventorySystem,
  ShippingCalculator,
  PaymentProcessor,
  USER,
  PRODUCT,
  ADDRESS,
} from "./2025-03-30-14-23-05-facade-pattern";

const fraudChecker = new FraudChecker();
const inventorySystem = new InventorySystem();
const shippingCalculator = new ShippingCalculator();
const paymentProcessor = new PaymentProcessor();

if (fraudChecker.verify(USER)) {
  if (inventorySystem.checkStock(PRODUCT)) {
    const shipping = shippingCalculator.compute(ADDRESS);

    if (paymentProcessor.charge(USER, PRODUCT.price + shipping)) {
      inventorySystem.reserve(PRODUCT);

      /*
      There can be - and there usually is - even more logic here.
      */
    }
  }
}
