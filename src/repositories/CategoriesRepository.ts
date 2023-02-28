import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
    console.log(this.categories);
  }

  list(): Category[] {
    return this.categories;
  }

  existsByName(name: string): boolean {
    const category = this.categories.some((category) => category.name === name);

    return category;
  }
}

export { CategoriesRepository };
