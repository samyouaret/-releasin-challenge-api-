import express from 'express'
import type Application from '../../Application'
import { apiDoc } from './docs/api-doc';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

export default function swaggerRoute(app: Application): express.Handler {
    let suffix = __dirname.includes('build') ? "*.js" : "*.ts";
    const options = {
        swaggerDefinition: apiDoc,
        apis: [`${__dirname}/${suffix}`],
    };
    const swaggerSpec = swaggerJSDoc(options);
    const router = express.Router()
    router.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    return router;
}