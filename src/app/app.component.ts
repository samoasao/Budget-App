import { Component } from '@angular/core';
import { Category } from './category';

const CATEGORIES: Category[] = [
	{id: 1, name:'Grocery', ammount: 180},
	{id: 2, name:'Gas', ammount: 125},
	{id: 3, name:'Mortgage', ammount: 1500},
	{id: 4, name:'Utilites', ammount: 200},

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Budget App';
  categories = CATEGORIES;
}
