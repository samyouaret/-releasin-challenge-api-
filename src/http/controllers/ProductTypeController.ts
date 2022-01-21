import ProductTypeService from "../../services/ProductTypeService";
import type { Request, Response } from "express";

class ProductTypeController {

    constructor(private readonly productTypeService: ProductTypeService) { }

    async create(req: Request, res: Response): Promise<void> {
        let productType = await this.productTypeService.create({
            data: {
                name: req.body.name,
            }
        });
        await this.productTypeService.createAttributes(req.body.attributes, productType.id);
        productType.attributes = req.body.attributes;
        res.status(201).json(productType);
    }

    async update(req: Request, res: Response): Promise<void> {
        let productType = await this.productTypeService.update({
            data: {
                name: req.body.name,
            },
            where: {
                id: req.params.id
            },
        });
        res.status(201).json(productType);
    }

    async addAttributes(req: Request, res: Response): Promise<void> {
        await this.productTypeService.createAttributes(req.body.attributes, req.params.id);
        res.status(201).json(req.body.attributes);
    }

    async removeAttributes(req: Request, res: Response): Promise<void> {
        await this.productTypeService.removeAttributes(req.body.attributes, req.params.id);
        res.status(204).json(req.body.attributes);
    }

}

export default ProductTypeController;