-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_id_fkey`;

-- AddForeignKey
ALTER TABLE `Avatar` ADD CONSTRAINT `Avatar_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
