-- CreateTable
CREATE TABLE "foods" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "vegetarian" BOOLEAN DEFAULT true,
    "pudding" BOOLEAN DEFAULT false,
    "foods" TEXT NOT NULL,
    "week_id" BIGINT,
    "meal_time_id" BIGINT,

    CONSTRAINT "meals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meal times" (
    "id" BIGSERIAL NOT NULL,
    "start_time" TIME(6) NOT NULL,
    "name" TEXT NOT NULL,
    "end_time" TIME(6),

    CONSTRAINT "meal times_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weeks" (
    "id" BIGSERIAL NOT NULL,
    "week_number" SMALLINT NOT NULL,

    CONSTRAINT "weeks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_week_id_fkey" FOREIGN KEY ("week_id") REFERENCES "weeks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_meal_time_id_fkey" FOREIGN KEY ("meal_time_id") REFERENCES "meal times"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
