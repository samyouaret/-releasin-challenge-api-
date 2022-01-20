import type { Prisma, PrismaClient } from "@prisma/client"

export default class AttributeRepository {

  constructor(private readonly prisma: PrismaClient) {
  }

  async create(attribute: Prisma.AttributeCreateArgs): Promise<any> {
    return this.prisma.attribute.create(attribute);
  }

  async update(Attribute: Prisma.AttributeUpdateArgs): Promise<any> {
    return this.prisma.attribute.update(Attribute);
  }

  async createAssigned(attribute: Prisma.AssignedAttributeCreateArgs): Promise<any> {
    return this.prisma.assignedAttribute.create(attribute);
  }

  async updateAssigned(attribute: Prisma.AssignedAttributeUpdateArgs): Promise<any> {
    return this.prisma.assignedAttribute.update(attribute);
  }

  async createValue(attribute: Prisma.AttributeValueCreateArgs): Promise<any> {
    return this.prisma.attributeValue.create(attribute);
  }

  async updateValue(attribute: Prisma.AttributeValueUpdateArgs): Promise<any> {
    return this.prisma.attributeValue.update(attribute);
  }
}
