/*
  Warnings:

  - You are about to drop the column `genderId` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Gender` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Gender` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_genderId_fkey`;

-- AlterTable
ALTER TABLE `gender` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `genderId`;

-- CreateIndex
CREATE UNIQUE INDEX `Gender_userId_key` ON `Gender`(`userId`);

-- AddForeignKey
ALTER TABLE `Gender` ADD CONSTRAINT `Gender_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
