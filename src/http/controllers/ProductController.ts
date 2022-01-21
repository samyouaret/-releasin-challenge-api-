import ProductService from "../../services/ProductService";
import type { Request, Response } from "express";

class ProductController {

    constructor(private readonly productService: ProductService) { }

    async all(req: Request, res: Response): Promise<void> {
        let data = [];
        data = await this.productService.getAll();
        res.json({ data });
    }

    async one(req: Request, res: Response): Promise<void> {
        let product = await this.productService.getById(req.params.id);
        if (!product) {
            res.sendStatus(404);
            return;
        }
        res.json(product);
    }

    async create(req: Request, res: Response): Promise<void> {
        let product = await this.productService.create({ data: {
            name: req.body.name,
            productTypeId: req.body.productTypeId,
        } });
        res.status(201).json(product);
    }

    async update(req: Request, res: Response): Promise<void> {
        let product = await this.productService.update({
            data: req.body,
            where: {
                id: req.params.id
            }
        });
        res.json(product);
    }

}

export default ProductController;