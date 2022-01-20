import Application from '../../Application'
import express, { Router } from 'express'
import type { PrismaClient } from '@prisma/client';
import AttributeRepository from '../../repositories/AttributeRepository';
import AttributeService from '../../services/AttributeService';
import AttributeController from '../controllers/AttributeController';

export default async function attributeRoutes(app: Application): Promise<Router> {
    let service = app.getService('prisma');
    let prisma: PrismaClient = (service as any).getInstance();
    const repository = new AttributeRepository(prisma);
    const attributeService = new AttributeService(repository)
    const controller = new AttributeController(attributeService);
    const router = express.Router()
    router.use(express.json());
    router.post('/api/attributes', controller.create.bind(controller))
    router.patch('/api/attributes/:id', controller.update.bind(controller))
    router.post('/api/assigned-attributes/', controller.createAssigned.bind(controller))
    router.patch('/api/assigned-attributes/:id', controller.updateAssigned.bind(controller))
   
    router.post('/api/values/', controller.createValue.bind(controller))
    router.patch('/api/values/:id', controller.updateValue.bind(controller))

    return router
}
