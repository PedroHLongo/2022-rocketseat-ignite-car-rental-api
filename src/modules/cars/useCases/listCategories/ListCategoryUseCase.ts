import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoryRepository: CategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
