
-- AlterTable
ALTER TABLE `stopscities` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`stopId`, `cityId`);

-- AlterTable
ALTER TABLE `trajectoriesstops` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`trajectoryId`, `stopId`);

-- AlterTable
ALTER TABLE `unit` ADD COLUMN `typeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `unitsservice` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`unitId`, `serviceId`);

-- AlterTable
ALTER TABLE `unitstrajectories` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`unitId`, `trajectoryId`);

-- AddForeignKey
ALTER TABLE `Unit` ADD CONSTRAINT `Unit_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Trajectory` ADD CONSTRAINT `Trajectory_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StopsCities` ADD CONSTRAINT `StopsCities_stopId_fkey` FOREIGN KEY (`stopId`) REFERENCES `Stop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StopsCities` ADD CONSTRAINT `StopsCities_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrajectoriesStops` ADD CONSTRAINT `TrajectoriesStops_trajectoryId_fkey` FOREIGN KEY (`trajectoryId`) REFERENCES `Trajectory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrajectoriesStops` ADD CONSTRAINT `TrajectoriesStops_stopId_fkey` FOREIGN KEY (`stopId`) REFERENCES `Stop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnitsTrajectories` ADD CONSTRAINT `UnitsTrajectories_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `Unit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnitsTrajectories` ADD CONSTRAINT `UnitsTrajectories_trajectoryId_fkey` FOREIGN KEY (`trajectoryId`) REFERENCES `Trajectory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnitsService` ADD CONSTRAINT `UnitsService_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `Unit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnitsService` ADD CONSTRAINT `UnitsService_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_trajectoryId_fkey` FOREIGN KEY (`trajectoryId`) REFERENCES `Trajectory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
