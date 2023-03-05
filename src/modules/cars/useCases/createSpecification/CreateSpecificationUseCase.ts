import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: SpecificationsRepository) {}

  execute(data: IRequest): void {
    const { name, description } = data;
    const existsSpecificationByName =
      this.specificationRepository.existsByName(name);

    if (existsSpecificationByName) {
      throw new Error("Specification already exists!");
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
