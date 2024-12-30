-- CreateTable
CREATE TABLE `Course` (
    `_id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `title` TEXT NOT NULL,
    `description` TEXT NULL,
    `imageUrl` TEXT NULL,
    `price` DOUBLE NULL,
    `isPublished` BOOLEAN NOT NULL DEFAULT false,
    `categoryId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    INDEX `Course_categoryId_idx`(`categoryId`),
    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attachment` (
    `_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `url` TEXT NOT NULL,
    `courseId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Attachment_courseId_idx`(`courseId`),
    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attachment` ADD CONSTRAINT `Attachment_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`_id`) ON DELETE CASCADE ON UPDATE CASCADE;
