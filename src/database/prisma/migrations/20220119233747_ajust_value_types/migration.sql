-- AlterTable
ALTER TABLE "AttributeValue" ADD COLUMN     "text" TEXT,
ALTER COLUMN "boolean" DROP NOT NULL,
ALTER COLUMN "date" DROP NOT NULL;
