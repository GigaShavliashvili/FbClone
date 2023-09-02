/*
  Warnings:

  - You are about to drop the column `gender` on the `user` table. All the data in the column will be lost.
  - Added the required column `genderId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_gender_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `gender`,
    ADD COLUMN `genderId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_genderId_fkey` FOREIGN KEY (`genderId`) REFERENCES `Gender`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
