import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './categories';

@Injectable()

export class CategoryService{
	categories:Category[];

	getCategories(): Category[]{
		return CATEGORIES;

	}

	getTotal(): number{
		
		//this.categories = this.getCategories();

		//return CATEGORIES.length;
		return CATEGORIES.reduce((prev, category) => prev + category.currentBalance, 0);
		//return 20;
	}
}