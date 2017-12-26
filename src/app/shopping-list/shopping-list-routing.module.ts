import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

import { ShoppingListtComponent } from "./shopping-list.component";

const shoppingListRoutes: Routes = [
    {path: 'shopping-list', component: ShoppingListtComponent},
]

@NgModule({
    imports: [
        RouterModule.forChild(shoppingListRoutes)
    ],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}