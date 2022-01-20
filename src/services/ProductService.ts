import { Prisma } from '@prisma/client'
import type ProductRepository from '../repositories/ProductRepository'

export default class ProductService {
  constructor(private readonly repository: ProductRepository) {
  }

  async getAll(): Promise<any[]> {
    return await this.repository.findMany({take:50})
  }

  async getById(id: string): Promise<any> {
    return await this.repository.findOne({ where: { id } })
  }

  async create(product:Prisma.ProductCreateArgs): Promise<any> {
    return this.repository.create(product);
  }

  async update(product:Prisma.ProductUpdateArgs): Promise<any> {
    return this.repository.update(product);
  }
}
