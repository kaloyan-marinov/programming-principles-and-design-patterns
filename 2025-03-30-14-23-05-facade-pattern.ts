const paymentProcessor = new PaymentProcessor();
const inventorySystem = new InventorySystem();
const shippingCalculator = new ShippingCalculator();
const fraudChecker = new FraudChecker();

if (fraudChecker.verify(user)) {
  if (inventorySystem.checkStock(product)) {
    const shipping = shippingCalculator.compute(address);

    if paymentProcessor.charge(user, product.price + shipping) {
      inventorySystem.reserve(product);

      /*
      There can be - and there usually is - even more logic here.
      */
    }
  }
}