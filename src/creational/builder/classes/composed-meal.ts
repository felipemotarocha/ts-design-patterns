/* eslint-disable @typescript-eslint/prefer-readonly */
import { MealComposite } from "../interfaces/meal-composite";

export class ComposedMeal implements MealComposite {
  private readonly children: MealComposite[] = [];

  getPrice(): number {
    return this.children.reduce((acc, cur) => acc + cur.getPrice(), 0);
  }

  add(meals: MealComposite[]): void {
    for (const m of meals) {
      this.children.push(m);
    }
  }
}
