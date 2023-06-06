/*
  Warnings:

  - You are about to drop the column `ancho` on the `asr` table. All the data in the column will be lost.
  - You are about to drop the column `calidad` on the `asr` table. All the data in the column will be lost.
  - You are about to drop the column `espesor` on the `asr` table. All the data in the column will be lost.
  - You are about to drop the column `largo` on the `asr` table. All the data in the column will be lost.
  - You are about to drop the column `piezas` on the `asr` table. All the data in the column will be lost.
  - Added the required column `pedido02` to the `Asr` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `asr` DROP COLUMN `ancho`,
    DROP COLUMN `calidad`,
    DROP COLUMN `espesor`,
    DROP COLUMN `largo`,
    DROP COLUMN `piezas`,
    ADD COLUMN `pedido02` JSON NOT NULL,
    MODIFY `cantidad` VARCHAR(191) NULL;
