export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  existsByName(name: string): boolean;
}

export { ISpecificationsRepository };
