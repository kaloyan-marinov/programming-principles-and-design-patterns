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

export interface IProduct {
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

export class PaymentProcessor {
  constructor() {}

  charge(user: IUser, monetaryAmount: number): boolean {
    console.log(
      `charging a monetary amount of ${monetaryAmount} to IUser with id=${user.id}`
    );
    return false;
  }
}

export const USER: IUser = {
  id: 17,
};

export const PRODUCT: IProduct = {
  name: "chair",
  price: 100,
};

export const ADDRESS: string = "100 Main Street / Boston, MA / USA";
