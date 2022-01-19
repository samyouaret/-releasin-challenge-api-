import express from 'express'
import type Application from '../../Application'
import { serverConfig } from '../../config/server.config';

export default function rootRoutes(app: Application): express.Handler {
    const router = express.Router()

    router.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
        res.json({
            api: "v1",
            description: "Product Managment API",
            docs: `${serverConfig.host}:${serverConfig.port}/api/docs`
        })
    });

    router.get('/api', async (req: express.Request, res: express.Response): Promise<void> => {
        res.json({
            api: "v1",
            description: "Product Managment API",
            docs: `${serverConfig.host}:${serverConfig.port}/api/docs`
        })
    });

    return router;
}