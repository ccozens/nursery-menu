/*
  Warnings:

  - You are about to drop the column `name` on the `foods` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "foods" DROP COLUMN "name";

-- CreateTable
CREATE TABLE "items" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "vegetarian" BOOLEAN DEFAULT true,
    "pudding" BOOLEAN DEFAULT false,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);
