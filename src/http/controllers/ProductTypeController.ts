import ProductTypeService from "../../services/ProductTypeService";
import type { Request, Response } from "express";

class ProductTypeController {

    constructor(private readonly productTypeService: ProductTypeService) { }

    async create(req: Request, res: Response): Promise<void> {
        let productType = await this.productTypeService.create({ data: req.body });
        res.status(201).json(productType);
    }

    async update(req: Request, res: Response): Promise<void> {
        let productType = await this.productTypeService.update({
            data: req.body,
            where: {
                id: req.params.id
            }
        });
        res.json(productType);
    }

}

export default ProductTypeController;