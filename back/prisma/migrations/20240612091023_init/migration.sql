-- CreateTable
CREATE TABLE "totos" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "test" TEXT NOT NULL,

    CONSTRAINT "totos_pkey" PRIMARY KEY ("id")
);
