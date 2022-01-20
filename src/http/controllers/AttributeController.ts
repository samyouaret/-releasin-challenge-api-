import AttributeService from "../../services/AttributeService";
import type { Request, Response } from "express";

class AttributeController {

    constructor(private readonly attributeService: AttributeService) { }

    async create(req: Request, res: Response): Promise<void> {
        let attribute = await this.attributeService.create({
            data: {
                name: req.body.name,
                AttributeValue: {
                    connect: {
                        id: req.body.valueId
                    },
                }
            }
        });
        console.log(attribute);
        console.log("Logging attributes");
        res.status(201).json(attribute);
    }

    async update(req: Request, res: Response): Promise<void> {
        let Attribute = await this.attributeService.update({
            data: {
                name: req.body.name,
                AttributeValue: {
                    connect: {
                        id: req.body.valueId
                    },
                }
            },
            where: {
                id: req.params.id
            }
        });
        res.json(Attribute);
    }

    async createAssigned(req: Request, res: Response): Promise<void> {
        let attribute = await this.attributeService.createAssigned({
            data: {
                AttributeValue: {
                    connect: {
                        id: req.body.valueId
                    },
                }
            }
        });
        res.json(attribute);
    }

    async updateAssigned(req: Request, res: Response): Promise<void> {
        let attribute = await this.attributeService.updatedAssigned({
            data: {
                AttributeValue: {
                    connect: {
                        id: req.body.valueId
                    },
                }
            },
            where: {
                id: req.params.id
            }
        });
        res.json(attribute);
    }

    async createValue(req: Request, res: Response): Promise<void> {
        try {
            let typeValueMap = this.filterValue(req.body);
            let attribute = await this.attributeService.createValue({
                data: {
                    name: req.body.name,
                    ...typeValueMap
                }
            });
            res.status(201).json(attribute);
        } catch (error) {
            res.status(422).json({ error: (error as Error).message });
        }
    }

    // update value type should nullify other fields also
    async updateValue(req: Request, res: Response): Promise<void> {
        let typeValueMap = this.filterValue(req.body);
        let value = await this.attributeService.updateValue({
            data: {
                name: req.body.name,
                ...typeValueMap
            },
            where: {
                id: req.params.id
            }
        });
        res.json(value);
    }

    private filterValue(value: any) {
        let typeValueMap = { [value.name]: value.value } as any;
        if (value.name == "date") {
            typeValueMap["date"] = new Date(value.value);
        }
        return typeValueMap;
    }

}

export default AttributeController;