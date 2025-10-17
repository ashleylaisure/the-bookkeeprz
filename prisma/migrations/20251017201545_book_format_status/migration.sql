/*
  Warnings:

  - Added the required column `format` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "format" "BookFormat" NOT NULL,
ADD COLUMN     "status" "BookStatus" NOT NULL DEFAULT 'TBR';

-- DropEnum
DROP TYPE "public"."BookGenre";
