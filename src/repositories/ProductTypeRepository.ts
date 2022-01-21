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

  async createAttributes(attributes: string[], productTypeId: string): Promise<any> {
    let values = attributes.map((value) => {
      return { attributeId: value, productTypeId };
    });
    return this.prisma.productTypeAtributes.createMany({
      data: values
    });
  }

  async removeAttributes(attributes: string[], productTypeId: string): Promise<any> {
    return this.prisma.productTypeAtributes.deleteMany({
      where: {
        attributeId: { in: attributes },
        AND: { productTypeId }
      }
    });
  }
}
