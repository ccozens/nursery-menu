-- DropForeignKey
ALTER TABLE "foods" DROP CONSTRAINT "foods_week_id_fkey";

-- CreateTable
CREATE TABLE "_foods_weeks" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_foods_weeks_AB_unique" ON "_foods_weeks"("A", "B");

-- CreateIndex
CREATE INDEX "_foods_weeks_B_index" ON "_foods_weeks"("B");

-- AddForeignKey
ALTER TABLE "_foods_weeks" ADD CONSTRAINT "_foods_weeks_A_fkey" FOREIGN KEY ("A") REFERENCES "foods"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_foods_weeks" ADD CONSTRAINT "_foods_weeks_B_fkey" FOREIGN KEY ("B") REFERENCES "weeks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
