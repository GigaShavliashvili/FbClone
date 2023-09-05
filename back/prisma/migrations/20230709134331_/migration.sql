-- DropIndex
DROP INDEX `User_email_idx` ON `user`;

-- CreateTable
CREATE TABLE `Avatar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `avatar` TEXT NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Avatar` ADD CONSTRAINT `Avatar_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
