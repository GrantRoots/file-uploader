/*
  Warnings:

  - A unique constraint covering the columns `[folderId,url]` on the table `File` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[authorId,name]` on the table `Folder` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "File_folderId_url_key" ON "File"("folderId", "url");

-- CreateIndex
CREATE UNIQUE INDEX "Folder_authorId_name_key" ON "Folder"("authorId", "name");
