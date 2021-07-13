import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Coxinha (Brazilian Chicken Croquette) Recipe', 
               'Brazilian coxinha is a deep-fried croquette made of shredded chicken and cheese covered in a soft dough, which after breaded and deep-fried, becomes a crunchy crust.',
               'https://2.bp.blogspot.com/-VoVGBxmnpjs/XB1L7FGFmFI/AAAAAAAANw0/NsCNjzHZoxcZ5HpNTHKxz9laExuG4lkuQCLcBGAs/s1600/coxinha-frango-e-cheddar-5.JPG'),
    new Recipe('Brigadeiro (Brazilian Truffles) Recipe',
               'Brigadeiro is a truffle made of, in its classic version, chocolate and chocolate sprinkles. It is the most popular sweet in Brazil!',
               'https://1.bp.blogspot.com/-pd1beLUjQWA/XDo7OSarCFI/AAAAAAAAN0o/SDHsfR1k9HE-e3_e7iWXmviHx-N2s5ylgCLcBGAs/s1600/brigadeiro-sem-fogo.JPG'),
    new Recipe('Pão de Queijo (Brazilian Cheese Bread) Recipe',
               'Pão de Queijo is lightly crunchy on the outside, soft and chewy on the inside, and has a cheese flavor that just hugs your mouth.',
               'https://2.bp.blogspot.com/-U4ic7d-x3Ds/W3MEYSNxiwI/AAAAAAAANWE/t05Cwzb_HTcA7p2R5LELods-AbIOWTVXwCLcBGAs/s1600/p%25C3%25A3o-de-queijo-f%25C3%25A1cil-6.JPG')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
