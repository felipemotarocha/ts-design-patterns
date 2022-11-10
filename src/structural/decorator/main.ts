import {
  ProductCustomizationDecorator,
  ProductStampDecorator,
} from "./product/decorators";
import { TShirt } from "./product/t-shirt";

const tShirt = new TShirt();
const stampedTShirt = new ProductStampDecorator(tShirt);
const customizedStampedTShirt = new ProductCustomizationDecorator(
  stampedTShirt
);

console.log(tShirt.getName(), tShirt.getPrice());
console.log(stampedTShirt.getName(), stampedTShirt.getPrice());
console.log(
  customizedStampedTShirt.getName(),
  customizedStampedTShirt.getPrice()
);
