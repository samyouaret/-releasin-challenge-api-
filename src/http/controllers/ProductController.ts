import ProductService from "../../services/ProductService";
import type { Request, Response } from "express";

class ProductController {

    constructor(private readonly productService: ProductService) { }

    async all(req: Request, res: Response): Promise<void> {
        res.json({ data: [] })
    }

    async one(req: Request, res: Response): Promise<void> {
        res.json({});
    }
}

export default ProductController;