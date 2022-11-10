import { IProduct } from "./protocols";

class ProductDecorator implements IProduct {
  constructor(protected readonly product: IProduct) {}

  getName(): string {
    return this.product.getName();
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}

export class ProductStampDecorator extends ProductDecorator {
  constructor(product: IProduct) {
    super(product);
  }

  getName(): string {
    return this.product.getName() + " (Stamped)";
  }

  getPrice(): number {
    return this.product.getPrice() + 10;
  }
}

export class ProductCustomizationDecorator extends ProductDecorator {
  constructor(product: IProduct) {
    super(product);
  }

  getName(): string {
    return this.product.getName() + " (Customized)";
  }

  getPrice(): number {
    return this.product.getPrice() + 50;
  }
}
