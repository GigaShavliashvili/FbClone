-- DropForeignKey
ALTER TABLE `avatar` DROP FOREIGN KEY `Avatar_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `avatarId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_avatarId_fkey` FOREIGN KEY (`avatarId`) REFERENCES `Avatar`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
