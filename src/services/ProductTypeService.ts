import { Prisma } from '@prisma/client'
import ProductTypeRepository from '../repositories/ProductTypeRepository';

export default class ProductTypeService {
  constructor(private readonly repository: ProductTypeRepository) {
  }

  async create(productType: Prisma.ProductTypeCreateArgs): Promise<any> {
    return this.repository.create(productType);
  }

  async update(productType: Prisma.ProductTypeUpdateArgs): Promise<any> {
    return this.repository.update(productType);
  }
}
