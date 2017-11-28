import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [new Recipe('Spaghetti Bolognese',
    'Timon secret special Bolognese',
    'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    [new Ingredient('Bolognese', 20),
      new Ingredient('Pasta', 50)
    ]),
    new Recipe('Chicken with pasta',
      'Grilled chicken with pasta and Kethup',
      'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg',
      [new Ingredient('Chicken', 2000),
        new Ingredient('Pasta', 50)])];

  getRecipe() {
    return this.recipes.slice(); // slice returns a copy of the recipe matrix
  }

  getRecipes(index: number) {
    return this.recipes.slice()[index];
  }
}
