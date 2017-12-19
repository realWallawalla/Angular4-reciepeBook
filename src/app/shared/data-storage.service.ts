import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Injectable } from '@angular/core'
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService{
    constructor(private http: Http, private recipeService: RecipeService){}

    storeRecipe(){
        return this.http.put('https://ng-recipe-book-67933.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes(){
        this.http.get('https://ng-recipe-book-67933.firebaseio.com/recipes.json')
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if(!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes);
            }
        );
    }
}