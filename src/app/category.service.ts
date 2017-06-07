import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './categories';

@Injectable()

export class CategoryService{
	getCategories(): Category[]{
		return CATEGORIES;

	}

	getTotal(): number{
		return 20;
	}
}