import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListtComponent implements OnInit {
  ingredients: Ingredient [] = [new Ingredient('walla', 8),
                                new Ingredient('walla', 8) ];
  constructor() { }

  ngOnInit() {
  }

}
