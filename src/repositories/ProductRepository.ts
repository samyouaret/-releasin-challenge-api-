import type { Prisma, PrismaClient } from "@prisma/client"

export default class ProductRepository {

  constructor(private readonly prisma: PrismaClient) {
  }

  async findOne(filter: Prisma.ProductFindManyArgs): Promise<any> {
    return await this.prisma.product.findFirst(filter)
  }

  async findMany(filter?: Prisma.ProductFindManyArgs): Promise<any[]> {
    return await this.prisma.product.findMany(filter)
  }

  async getTypes(id: string): Promise<any> {
    return await this.prisma.product.findUnique({
      where: { id },
      include: { productType: true }
    });
  }

  async create(product: Prisma.ProductCreateArgs): Promise<any> {
    return this.prisma.product.create(product);
  }

  async update(product: Prisma.ProductUpdateArgs): Promise<any> {
    return this.prisma.product.update(product);
  }

}
