import { PrismaClient } from '@prisma/client'
import type Application from '../../Application'
import initiable from '../../contracts/Initiable'
import Startable from '../../contracts/Startable'
import { createPrisma } from '../../factory/createPrisma';

export default class PrismaService implements initiable, Startable {
    private prisma: PrismaClient;

    async init(context: Application): Promise<any> {
        this.prisma = createPrisma();
    }

    async start(): Promise<any> {
        await this.prisma.$connect()
    }

    getInstance(): PrismaClient {
        return this.prisma;
    }
}
