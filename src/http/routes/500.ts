import { Request, Response, ErrorRequestHandler } from 'express'
import type Application from '../../Application'

export default function error500(app: Application): ErrorRequestHandler {
    return (err: Error, req:Request, res:Response) => {
        let message: { message: string, error?: Error } = { message: "internal Error" };
        res.status(500).json(message);
    }
}