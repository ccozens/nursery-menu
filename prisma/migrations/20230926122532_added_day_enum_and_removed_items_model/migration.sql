/*
  Warnings:

  - You are about to drop the `items` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Day" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday');

-- AlterTable
ALTER TABLE "foods" ADD COLUMN     "day" "Day" NOT NULL DEFAULT 'Monday';

-- DropTable
DROP TABLE "items";
