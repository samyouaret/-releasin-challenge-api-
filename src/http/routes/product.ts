import Application from '../../Application'
import express, { Router } from 'express'
import type { PrismaClient } from '@prisma/client';
import ProductRepository from '../../repositories/ProductRepository';
import ProductService from '../../services/ProductService';
import ProductController from '../controllers/ProductController';

export default async function productRoutes(app: Application): Promise<Router> {
    let service = app.getService('prisma');
    let prisma: PrismaClient = (service as any).getInstance();
    const repository = new ProductRepository(prisma);
    const productService = new ProductService(repository)
    const controller = new ProductController(productService);
    const router = express.Router()

    /**
     * @openapi
     * /products:
     *   get:
     *     summary: Retrieve a list of products.
     *     description: Retrieve list to show all products made along with their related data like products and users.
     *     responses:
     *       200:
     *         description: A list of products.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 data:
     *                   type: array
     *                   items:
     *                     type: object
     *                     properties:
     *                       id:
     *                         type: integer
     *                         description: The product ID.
     *                         example: 1
     *                       amount:
     *                         type: string
     *                         description: Money amount of product in usd.
     *                         example: "$12.86"
     *                       complete:
     *                         type: boolean
     *                         description: status of completness of an product.
     *                         example: true
     *                       created_at:
     *                         type: string
     *                         description: valid string date.
     *                         example: "12/4/2021"
     *                       user_id:
     *                         type: integer
     *                         description: User id related to the product.
     *                         example: 1
     *                       product_id:
     *                         type: integer
     *                         description: Product id related to the product.
     *                         example: 1
     */
    router.get('/api/products', controller.all.bind(controller));

    /**
     * @openapi
     * /products/{id}:
     *   get:
     *     summary: Retrieve an product by id.
     *     description: Retrieve a specific  product with its related data like product and user.
     *     parameters:
     *      - name: "id"
     *        in: "path"
     *        description: "This is the unique identifier for the specific product"
     *        required: true
     *        type: "integer"
     *     responses:
     *       200:
     *         description: A list of products.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                   id:
     *                     type: integer
     *                     description: The product ID.
     *                     example: 1
     *                   amount:
     *                     type: string
     *                     description: Money amount of product in usd.
     *                     example: "$12.86"
     *                   complete:
     *                     type: boolean
     *                     description: status of completness of an product.
     *                     example: false,true
     *                   created_at:
     *                     type: string
     *                     description: valid string date.
     *                     example: "12/4/2021"
     *                   user_id:
     *                     type: integer
     *                     description: User id related to the product.
     *                     example: 1
     *                   product_id:
     *                     type: integer
     *                     description: Product id related to the product.
     *                     example: 1
     *       404:
     *         description: Target product not found.
     */
    router.get('/api/products/:id', controller.one.bind(controller))
    router.post('/api/products', controller.create.bind(controller))
    router.patch('/api/products/:id', controller.update.bind(controller))

    return router
}
