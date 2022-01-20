/*
  Warnings:

  - You are about to drop the column `productId` on the `AssignedAttribute` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AssignedAttribute" DROP CONSTRAINT "AssignedAttribute_productId_fkey";

-- AlterTable
ALTER TABLE "AssignedAttribute" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "AssignedAttributeOnProduct" (
    "productId" TEXT NOT NULL,
    "assignedAttributeId" TEXT NOT NULL,

    CONSTRAINT "AssignedAttributeOnProduct_pkey" PRIMARY KEY ("productId","assignedAttributeId")
);

-- AddForeignKey
ALTER TABLE "AssignedAttributeOnProduct" ADD CONSTRAINT "AssignedAttributeOnProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignedAttributeOnProduct" ADD CONSTRAINT "AssignedAttributeOnProduct_assignedAttributeId_fkey" FOREIGN KEY ("assignedAttributeId") REFERENCES "AssignedAttribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
