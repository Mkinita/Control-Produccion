/*
  Warnings:

  - Added the required column `operador` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` ADD COLUMN `operador` VARCHAR(191) NOT NULL;
