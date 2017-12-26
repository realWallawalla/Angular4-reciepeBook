import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipesEditComponent } from '../recipes/recipes-edit/recipes-edit.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { AuthGuard } from '../auth/auth-guard.service';



const recipesRoutes: Routes = [
    {path: 'recipes', component: RecipesComponent, children : [
        {path: 'new', component: RecipesEditComponent, canActivate: [AuthGuard] },
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipesEditComponent, canActivate: [AuthGuard]},
        ]}
    //canActivate is a guard for the route to check if you are loged in or not
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule{}   