/*
  Warnings:

  - Added the required column `espesor01` to the `Paquetes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `paquetes` ADD COLUMN `espesor01` VARCHAR(191) NOT NULL;
