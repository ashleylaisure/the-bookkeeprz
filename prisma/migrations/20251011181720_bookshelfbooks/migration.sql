/*
  Warnings:

  - You are about to drop the column `userId` on the `books` table. All the data in the column will be lost.
  - Added the required column `author` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `format` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BookFormat" AS ENUM ('HARDCOVER', 'PAPERBACK', 'EBOOK', 'AUDIOBOOK');

-- CreateEnum
CREATE TYPE "BookStatus" AS ENUM ('TBR', 'READING', 'READ', 'PAUSED', 'DNF');

-- CreateEnum
CREATE TYPE "BookGenre" AS ENUM ('action_thriller', 'action_adventure_fiction', 'apocalyptic_sci_fi', 'art_photography', 'autobiography_memoir', 'biography', 'body_horror', 'caper', 'childrens_fiction', 'classic_fiction', 'colonization_sci_fi', 'comedy_horror', 'conspiracy_thriller', 'contemporary_fiction', 'contemporary_romance', 'cozy_mystery', 'dark_fantasy', 'dark_romance', 'disaster_thriller', 'erotic_romance', 'espionage_thriller', 'essays', 'fairy_tales', 'fantasy', 'fantasy_romance_romantasy', 'folktales', 'food_drink', 'forensic_thriller', 'gothic_horror', 'gothic_romance', 'graphic_novel', 'gumshoe_detective_mystery', 'hard_sci_fi', 'heroic_fantasy', 'high_fantasy', 'historical_fantasy', 'historical_fiction', 'historical_mystery', 'historical_romance', 'historical_thriller', 'history', 'horror', 'howdunnits', 'how_to_guides', 'humanities_social_sciences', 'humor', 'legal_thriller', 'lgbtq', 'literary_fiction', 'locked_room_mystery', 'lovecraftian_cosmic_horror', 'low_fantasy', 'magical_realism', 'military_sci_fi', 'mind_uploading_sci_fi', 'mystery', 'mythic_fantasy', 'new_adult', 'noir', 'parallel_world_sci_fi', 'paranormal_horror', 'paranormal_romance', 'paranormal_thriller', 'parenting', 'philosophy', 'post_apocalyptic_horror', 'procedural_hard_boiled_mystery', 'psychological_horror', 'psychological_thriller', 'quiet_horror', 'regency', 'religion_spirituality', 'religious_thriller', 'romance', 'romantic_comedy', 'romantic_suspense', 'satire', 'science_technology', 'science_fiction', 'sci_fi_romance', 'self_help', 'short_story', 'slasher', 'soft_sci_fi', 'space_opera', 'space_western', 'steampunk', 'supernatural_mystery', 'thriller', 'travel', 'true_crime', 'urban_fantasy', 'western', 'womens_fiction', 'young_adult');

-- DropForeignKey
ALTER TABLE "public"."books" DROP CONSTRAINT "books_userId_fkey";

-- AlterTable
ALTER TABLE "books" DROP COLUMN "userId",
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "coverImage" TEXT,
ADD COLUMN     "dateFinished" TIMESTAMP(3),
ADD COLUMN     "dateStarted" TIMESTAMP(3),
ADD COLUMN     "format" "BookFormat" NOT NULL,
ADD COLUMN     "status" "BookStatus" NOT NULL DEFAULT 'TBR',
ADD COLUMN     "totalPages" INTEGER;

-- CreateTable
CREATE TABLE "bookshelf" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "bookshelf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookshelfBooks" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bookId" TEXT NOT NULL,
    "bookshelfId" TEXT NOT NULL,

    CONSTRAINT "BookshelfBooks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BookshelfBooks_bookId_bookshelfId_key" ON "BookshelfBooks"("bookId", "bookshelfId");

-- AddForeignKey
ALTER TABLE "BookshelfBooks" ADD CONSTRAINT "BookshelfBooks_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookshelfBooks" ADD CONSTRAINT "BookshelfBooks_bookshelfId_fkey" FOREIGN KEY ("bookshelfId") REFERENCES "bookshelf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
