/*
  Warnings:

  - You are about to drop the column `userId` on the `gender` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `gender` DROP FOREIGN KEY `Gender_userId_fkey`;

-- AlterTable
ALTER TABLE `gender` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `genderId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_genderId_fkey` FOREIGN KEY (`genderId`) REFERENCES `Gender`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
