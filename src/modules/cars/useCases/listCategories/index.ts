import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);

const listCategoriesController = new ListCategoryController(
  listCategoriesUseCase
);

export { listCategoriesController };
