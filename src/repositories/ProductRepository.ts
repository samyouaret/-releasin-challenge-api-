import { PrismaClient } from "@prisma/client"

export default class ProductRepository {

  constructor(private readonly prisma: PrismaClient) {
  }

  async findOne(filter: any): Promise<any> {
    return await this.prisma.product.findFirst(filter)
  }

  async findMany(filter?: any): Promise<any[]> {
    return await this.prisma.product.findMany(filter)
  }
}
