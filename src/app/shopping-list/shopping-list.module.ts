import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { ShoppingListEditComponent } from '../shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListtComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";

@NgModule({
    declarations: [
        ShoppingListEditComponent,
        ShoppingListtComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ShoppingListRoutingModule
    ]
})
export class ShoppingListModule{}