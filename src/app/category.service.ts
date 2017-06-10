import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './categories';



@Injectable()

export class CategoryService{
	model:Category;
	private nextID: number;

	constructor(){
		this.nextID = CATEGORIES.length + 1;
	}

	//return the current list of categories from the data source
	getCategories(): Category[]{
		//TODO: get from Datasource.
		return CATEGORIES;
	}

	//return the total ammount of the current balances
	getTotal(categories:Category[]): number{
		return categories.reduce((prev, category) => prev + category.currentBalance, 0);
	}

	addCategory(name:string, balance:number): Category{
		this.model = new Category(this.nextID++, name, balance);
		CATEGORIES.push(this.model);
		return this.model;
	}
}