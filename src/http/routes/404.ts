import { Request, Response, Handler } from 'express'

import type Application from '../../Application'

export default function error404(app: Application): Handler {
    return (req: Request, res: Response) => {
        res.sendStatus(404);
    }
}