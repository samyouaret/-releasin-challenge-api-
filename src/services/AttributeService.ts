import { Prisma } from '@prisma/client'
import AttributeRepository from '../repositories/AttributeRepository';

export default class AttributeService {
  constructor(private readonly repository: AttributeRepository) {
  }

  async create(attribute: Prisma.AttributeCreateArgs): Promise<any> {
    return this.repository.create(attribute);
  }

  async update(attribute: Prisma.AttributeUpdateArgs): Promise<any> {
    return this.repository.update(attribute);
  }

  async createAssigned(attribute: Prisma.AssignedAttributeCreateArgs): Promise<any> {
    return this.repository.createAssigned(attribute);
  }

  async updatedAssigned(attribute: Prisma.AssignedAttributeUpdateArgs): Promise<any> {
    return this.repository.updateAssigned(attribute);
  }

  async createValue(attribute: Prisma.AttributeValueCreateArgs): Promise<any> {
    return this.repository.createValue(attribute);
  }

  async updateValue(attribute: Prisma.AttributeValueUpdateArgs): Promise<any> {
    return this.repository.updateValue(attribute);
  }

}
