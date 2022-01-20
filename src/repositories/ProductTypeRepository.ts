import type { Prisma, PrismaClient } from "@prisma/client"

export default class ProductTypeRepository {

  constructor(private readonly prisma: PrismaClient) {
  }

  async create(productType: Prisma.ProductTypeCreateArgs): Promise<any> {
    return this.prisma.productType.create(productType);
  }

  async update(productType: Prisma.ProductTypeUpdateArgs): Promise<any> {
    return this.prisma.productType.update(productType);
  }

}
