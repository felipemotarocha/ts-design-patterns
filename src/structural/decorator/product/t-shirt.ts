import { IProduct } from "./protocols";

export class TShirt implements IProduct {
  private readonly name = "T-Shirt";
  private readonly price = 49.49;

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
