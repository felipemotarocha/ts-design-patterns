export interface MealBuilder {
  makeMeal: () => this;
  makeBeverage: () => this;
  makeDessert: () => this;
}
