import { MealBuilder } from "../interfaces/meal-builder";
import { ComposedMeal } from "./composed-meal";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilder {
  private meal: ComposedMeal = new ComposedMeal();

  reset(): this {
    this.meal = new ComposedMeal();
    return this;
  }

  makeMeal(): this {
    this.meal.add([
      new Rice("Arroz", 50),
      new Beans("Feijão", 10),
      new Meat("Carne", 20),
    ]);
    return this;
  }

  makeBeverage(): this {
    this.meal.add([new Beverage("Bebida", 7)]);
    return this;
  }

  makeDessert(): this {
    this.meal.add([new Dessert("Sobremesa", 10)]);
    return this;
  }

  getMeal(): ComposedMeal {
    return this.meal;
  }
}
