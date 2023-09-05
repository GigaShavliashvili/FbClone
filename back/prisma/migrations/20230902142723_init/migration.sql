/*
  Warnings:

  - Added the required column `isProfile` to the `Avatar` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Avatar_userId_fkey` ON `avatar`;

-- AlterTable
ALTER TABLE `avatar` ADD COLUMN `isProfile` BOOLEAN NOT NULL;
