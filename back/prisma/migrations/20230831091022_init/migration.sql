/*
  Warnings:

  - You are about to drop the column `gender` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `gender`;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_id_fkey` FOREIGN KEY (`id`) REFERENCES `Gender`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
