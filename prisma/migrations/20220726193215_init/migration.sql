-- CreateTable
CREATE TABLE "PersonalHistory" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "PersonalHistory_pkey" PRIMARY KEY ("id")
);
