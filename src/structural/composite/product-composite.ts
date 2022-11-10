export interface ProductComponent {
  getPrice: () => number;

  add?: (products: ProductComponent[]) => void;
  remove?: (product: ProductComponent) => void;
}

export class LeafProduct implements ProductComponent {
  constructor(public readonly name: string, public readonly price: number) {}

  getPrice(): number {
    return this.price;
  }
}

export class ComposedProduct implements ProductComponent {
  private readonly children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((sum, curr) => sum + curr.getPrice(), 0);
  }

  add(products: ProductComponent[]): void {
    for (const p of products) this.children.push(p);
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);

    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }
}

const shirt = new LeafProduct("Shirt", 40);
const pen = new LeafProduct("Pen", 1);
const smartphone = new LeafProduct("Smartphone", 500);

const productBox = new ComposedProduct();

productBox.add([shirt, pen, smartphone]);

const tablet = new LeafProduct("Tablet", 300);
const kindle = new LeafProduct("Kindle", 100);
const shoes = new LeafProduct("Shoes", 50);

const anotherProductBox = new ComposedProduct();

anotherProductBox.add([tablet, kindle, shoes]);

productBox.add([anotherProductBox]);
