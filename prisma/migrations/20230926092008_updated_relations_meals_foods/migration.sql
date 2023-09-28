/*
  Warnings:

  - You are about to drop the column `meal_time_id` on the `foods` table. All the data in the column will be lost.
  - You are about to drop the column `week_id` on the `foods` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "foods" DROP CONSTRAINT "foods_meal_time_id_fkey";

-- AlterTable
ALTER TABLE "foods" DROP COLUMN "meal_time_id",
DROP COLUMN "week_id";

-- CreateTable
CREATE TABLE "meal_foods" (
    "id" BIGSERIAL NOT NULL,
    "meal_id" BIGINT NOT NULL,
    "food_id" BIGINT NOT NULL,

    CONSTRAINT "meal_foods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_meals_foods" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateIndex
CREATE INDEX "meal_foods_food_id_idx" ON "meal_foods"("food_id");

-- CreateIndex
CREATE INDEX "meal_foods_meal_id_idx" ON "meal_foods"("meal_id");

-- CreateIndex
CREATE UNIQUE INDEX "meal_foods_meal_id_food_id_key" ON "meal_foods"("meal_id", "food_id");

-- CreateIndex
CREATE UNIQUE INDEX "_meals_foods_AB_unique" ON "_meals_foods"("A", "B");

-- CreateIndex
CREATE INDEX "_meals_foods_B_index" ON "_meals_foods"("B");

-- AddForeignKey
ALTER TABLE "meal_foods" ADD CONSTRAINT "meal_foods_meal_id_fkey" FOREIGN KEY ("meal_id") REFERENCES "meal times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal_foods" ADD CONSTRAINT "meal_foods_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_meals_foods" ADD CONSTRAINT "_meals_foods_A_fkey" FOREIGN KEY ("A") REFERENCES "foods"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_meals_foods" ADD CONSTRAINT "_meals_foods_B_fkey" FOREIGN KEY ("B") REFERENCES "meal times"("id") ON DELETE CASCADE ON UPDATE CASCADE;
