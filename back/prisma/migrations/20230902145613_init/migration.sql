-- AlterTable
ALTER TABLE `avatar` MODIFY `isProfile` BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_id_fkey` FOREIGN KEY (`id`) REFERENCES `Avatar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
