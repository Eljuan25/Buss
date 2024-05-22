
-- AlterTable
ALTER TABLE `stopscities` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `trajectoriesstops` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `unitsservice` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `unitstrajectories` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `StopsCities_stopId_cityId_key` ON `StopsCities`(`stopId`, `cityId`);

-- CreateIndex
CREATE UNIQUE INDEX `TrajectoriesStops_trajectoryId_stopId_key` ON `TrajectoriesStops`(`trajectoryId`, `stopId`);

-- CreateIndex
CREATE UNIQUE INDEX `UnitsService_unitId_serviceId_key` ON `UnitsService`(`unitId`, `serviceId`);

-- CreateIndex
CREATE UNIQUE INDEX `UnitsTrajectories_unitId_trajectoryId_key` ON `UnitsTrajectories`(`unitId`, `trajectoryId`);
