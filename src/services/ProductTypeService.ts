import { Prisma } from '@prisma/client'
import ProductTypeRepository from '../repositories/ProductTypeRepository';

export default class ProductTypeService {
  constructor(private readonly repository: ProductTypeRepository) {
  }

  async create(productType: Prisma.ProductTypeCreateArgs): Promise<any> {
    return this.repository.create(productType);
  }

  async createAttributes(attributes: string[], productTypeId: string): Promise<any> {
    return this.repository.createAttributes(attributes, productTypeId);
  }

  async removeAttributes(attributes: string[], productTypeId: string): Promise<any> {
    return this.repository.removeAttributes(attributes, productTypeId);
  }

  async update(productType: Prisma.ProductTypeUpdateArgs): Promise<any> {
    return this.repository.update(productType);
  }
}
