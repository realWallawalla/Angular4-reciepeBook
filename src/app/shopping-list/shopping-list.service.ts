import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient []>();
  private ingredients: Ingredient [] = [new Ingredient('walla', 8)];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredientsFromRecipeListDetails(recipe: Recipe) {
    // for (let ingredient of recipe.ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...recipe.ingredients); //makes the array to an list so you push ervything at once to ingredient array instead of iterate.
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
