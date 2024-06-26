/*
  Warnings:

  - The primary key for the `Metadata` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Metadata` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `metadataId` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_metadataId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "metadataId",
ADD COLUMN     "metadataId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Metadata" DROP CONSTRAINT "Metadata_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Metadata_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_metadataId_fkey" FOREIGN KEY ("metadataId") REFERENCES "Metadata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
