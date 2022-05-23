/*
  Warnings:

  - You are about to drop the column `name` on the `Tweet` table. All the data in the column will be lost.
  - Added the required column `tweet` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "name",
ADD COLUMN     "tweet" TEXT NOT NULL;
