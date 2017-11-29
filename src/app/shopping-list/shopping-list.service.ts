import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../recipes/recipe.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient [] = [];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredientsFromRecipeListDetails(recipe: Recipe) {
    this.ingredients.push(...recipe.ingredients); //... makes the array to an list so you push ervything at once to ingredient array instead of iterate.
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
