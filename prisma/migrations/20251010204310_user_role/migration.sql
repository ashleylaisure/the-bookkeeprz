-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "sessions" ADD COLUMN     "impersonatedBy" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "banExpires" TIMESTAMP(3),
ADD COLUMN     "banReason" TEXT,
ADD COLUMN     "banned" BOOLEAN DEFAULT false,
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';
