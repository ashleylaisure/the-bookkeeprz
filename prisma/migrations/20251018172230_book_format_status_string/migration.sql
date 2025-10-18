/*
  Warnings:

  - The `format` column on the `books` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `books` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "format",
ADD COLUMN     "format" TEXT NOT NULL DEFAULT 'PAPERBACK',
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'TBR';

-- DropEnum
DROP TYPE "public"."BookFormat";

-- DropEnum
DROP TYPE "public"."BookStatus";
