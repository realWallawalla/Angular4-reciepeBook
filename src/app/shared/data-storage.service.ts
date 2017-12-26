import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Injectable } from '@angular/core'
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService{
    constructor(private http: Http,
                private recipeService: RecipeService, 
                private authService: AuthService){}

    storeRecipe(){
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-67933.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes(){
        const token = this.authService.getToken();
        this.http.get('https://ng-recipe-book-67933.firebaseio.com/recipes.json?auth=' + token)
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