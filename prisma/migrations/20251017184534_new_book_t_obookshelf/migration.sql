/*
  Warnings:

  - You are about to drop the column `format` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `books` table. All the data in the column will be lost.
  - You are about to drop the `BookshelfBooks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bookshelf` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."BookshelfBooks" DROP CONSTRAINT "BookshelfBooks_bookId_fkey";

-- DropForeignKey
ALTER TABLE "public"."BookshelfBooks" DROP CONSTRAINT "BookshelfBooks_bookshelfId_fkey";

-- AlterTable
ALTER TABLE "books" DROP COLUMN "format",
DROP COLUMN "status",
ADD COLUMN     "genre" TEXT,
ALTER COLUMN "author" DROP NOT NULL;

-- DropTable
DROP TABLE "public"."BookshelfBooks";

-- DropTable
DROP TABLE "public"."bookshelf";

-- CreateTable
CREATE TABLE "bookshelves" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT NOT NULL DEFAULT '#7f22fe',

    CONSTRAINT "bookshelves_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookToBookshelf" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_BookToBookshelf_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_BookToBookshelf_B_index" ON "_BookToBookshelf"("B");

-- AddForeignKey
ALTER TABLE "_BookToBookshelf" ADD CONSTRAINT "_BookToBookshelf_A_fkey" FOREIGN KEY ("A") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToBookshelf" ADD CONSTRAINT "_BookToBookshelf_B_fkey" FOREIGN KEY ("B") REFERENCES "bookshelves"("id") ON DELETE CASCADE ON UPDATE CASCADE;
