/*
  Warnings:

  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_id_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `gender` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_gender_fkey` FOREIGN KEY (`gender`) REFERENCES `Gender`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
