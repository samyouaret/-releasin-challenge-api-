import Application from '../../Application'
import express, { Router } from 'express'
import type { PrismaClient } from '@prisma/client';
import ProductTypeRepository from '../../repositories/ProductTypeRepository';
import ProductTypeService from '../../services/ProductTypeService';
import ProductTypeController from '../controllers/ProductTypeController';

export default async function productRoutes(app: Application): Promise<Router> {
    let service = app.getService('prisma');
    let prisma: PrismaClient = (service as any).getInstance();
    const repository = new ProductTypeRepository(prisma);
    const productTypeService = new ProductTypeService(repository)
    const controller = new ProductTypeController(productTypeService);
    const router = express.Router()

    router.post('/api/products-types', controller.create.bind(controller))
    router.patch('/api/products-types/:id', controller.update.bind(controller))

    return router
}
