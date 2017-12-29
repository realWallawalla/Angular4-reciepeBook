import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { Data } from '@angular/router';
import { RecipeService } from '../../recipes/recipe.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authService: AuthService

  constructor(private dataStorageService: DataStorageService, 
              authService: AuthService) {
                this.authService = authService; 
      // to be able to use aot when buildng project, cannot sure short command private for some reaason
               }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorageService.storeRecipe()
    .subscribe((response: Response) => {
        console.log(response);
    }); 
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
    }

  onLogout() {
    this.authService.logout();
  }

}
