import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; //param name id corresponds to dynamic variable in app-routing.
        this.editMode = params['id'] != null;
      }
    );
  }

  private initForm() {
    let recipeName = '';
    if(this.editMode) {
      const recipe = this.recipeService.getRecipes(this.id);      
      recipeName = recipe.name;
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(null),
      imagePath: new FormControl(null),
    })
  }

}
