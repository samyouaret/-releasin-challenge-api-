import type ProductRepository from '../repositories/ProductRepository'

export default class ProductService {
  constructor (private readonly repository: ProductRepository) {
  }

  async getAll (): Promise<any[]> {
    return await this.repository.findMany()
  }

  async getById (id: number | string): Promise<any> {
    return await this.repository.findOne({ id: id })
  }
}
