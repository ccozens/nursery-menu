/*
  Warnings:

  - You are about to drop the column `foods` on the `foods` table. All the data in the column will be lost.
  - The `end_time` column on the `meal times` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `food` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `start_time` on the `meal times` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "foods" DROP COLUMN "foods",
ADD COLUMN     "food" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "meal times" DROP COLUMN "start_time",
ADD COLUMN     "start_time" VARCHAR(4) NOT NULL,
DROP COLUMN "end_time",
ADD COLUMN     "end_time" VARCHAR(4);
