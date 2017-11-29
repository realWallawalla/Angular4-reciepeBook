import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListtComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription;
  ingredients: Ingredient [] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscriptions = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient []) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
