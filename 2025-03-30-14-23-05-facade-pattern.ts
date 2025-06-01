export interface IUser {
  id: number;
}

export class FraudChecker {
  constructor() {}

  verify(user: IUser): boolean {
    console.log(`verifying IUser with id=${user.id}`);

    return true;
  }
}

interface IProduct {
  name: string;
  price: number;
}

interface IProductNameToCount {
  [key: string]: number;
}

export class InventorySystem {
  private productNameToCount: IProductNameToCount;

  constructor() {
    this.productNameToCount = {
      chair: 17,
      table: 2,
      desk: 3,
    };
  }

  checkStock(product: IProduct): boolean {
    if (
      !Object.keys(this.productNameToCount).includes(product.name) ||
      this.productNameToCount[product.name] === 0
    ) {
      return false;
    }

    return true;
  }

  reserve(product: IProduct): void {
    this.productNameToCount[product.name] -= 1;
  }
}

export class ShippingCalculator {
  constructor() {}

  compute(address: string): number {
    return 17_000;
  }
}

export const user: IUser = {
  id: 17,
};

export const product: IProduct = {
  name: "chair",
  price: 100,
};

export const address: string = "100 Main Street / Boston, MA / USA";

export class PaymentProcessor {
  constructor() {}

  charge(user: IUser, monetaryAmount: number): boolean {
    console.log(
      `charging a monetary amount of ${monetaryAmount} to IUser with id=${user.id}`
    );
    return false;
  }
}

const fraudChecker = new FraudChecker();
const inventorySystem = new InventorySystem();
const shippingCalculator = new ShippingCalculator();
const paymentProcessor = new PaymentProcessor();

if (fraudChecker.verify(user)) {
  if (inventorySystem.checkStock(product)) {
    const shipping = shippingCalculator.compute(address);

    if (paymentProcessor.charge(user, product.price + shipping)) {
      inventorySystem.reserve(product);

      /*
      There can be - and there usually is - even more logic here.
      */
    }
  }
}
