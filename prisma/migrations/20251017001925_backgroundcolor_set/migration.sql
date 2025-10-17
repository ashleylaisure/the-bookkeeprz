/*
  Warnings:

  - Made the column `color` on table `bookshelf` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "bookshelf" ALTER COLUMN "color" SET NOT NULL;
