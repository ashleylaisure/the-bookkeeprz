/*
  Warnings:

  - You are about to drop the `_BookToBookshelf` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_BookToBookshelf" DROP CONSTRAINT "_BookToBookshelf_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_BookToBookshelf" DROP CONSTRAINT "_BookToBookshelf_B_fkey";

-- DropTable
DROP TABLE "public"."_BookToBookshelf";

-- CreateTable
CREATE TABLE "_book_bookshelf" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_book_bookshelf_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_book_bookshelf_B_index" ON "_book_bookshelf"("B");

-- AddForeignKey
ALTER TABLE "_book_bookshelf" ADD CONSTRAINT "_book_bookshelf_A_fkey" FOREIGN KEY ("A") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_book_bookshelf" ADD CONSTRAINT "_book_bookshelf_B_fkey" FOREIGN KEY ("B") REFERENCES "bookshelves"("id") ON DELETE CASCADE ON UPDATE CASCADE;
