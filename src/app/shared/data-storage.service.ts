import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService{
    constructor(private httpClient: HttpClient,
                private recipeService: RecipeService, 
                private authService: AuthService){}

    storeRecipe(){
        const token = this.authService.getToken();
        return this.httpClient.put('https://ng-recipe-book-67933.firebaseio.com/recipes.json',
                                    this.recipeService.getRecipes(), {
                                        observe: 'body',
                                        params: new HttpParams().set('auth', token)
                                    });
    }

    getRecipes(){
        const token = this.authService.getToken();
        this.httpClient.get<Recipe[]>('https://ng-recipe-book-67933.firebaseio.com/recipes.json?auth=' + token)
        .map(
            (recipes) => {
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