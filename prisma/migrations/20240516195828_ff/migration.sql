/*
  Warnings:

  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "phone",
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "roles" TEXT[] DEFAULT ARRAY['user']::TEXT[];
