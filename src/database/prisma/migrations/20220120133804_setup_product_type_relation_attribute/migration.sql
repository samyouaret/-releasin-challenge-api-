-- AlterTable
ALTER TABLE "Attribute" ADD COLUMN     "productTypeId" TEXT;

-- CreateTable
CREATE TABLE "ProductTypeAtributes" (
    "productTypeId" TEXT NOT NULL,
    "attributeId" TEXT NOT NULL,

    CONSTRAINT "ProductTypeAtributes_pkey" PRIMARY KEY ("productTypeId","attributeId")
);

-- AddForeignKey
ALTER TABLE "ProductTypeAtributes" ADD CONSTRAINT "ProductTypeAtributes_productTypeId_fkey" FOREIGN KEY ("productTypeId") REFERENCES "ProductType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTypeAtributes" ADD CONSTRAINT "ProductTypeAtributes_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "Attribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_productTypeId_fkey" FOREIGN KEY ("productTypeId") REFERENCES "ProductType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
