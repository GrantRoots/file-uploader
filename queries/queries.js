const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function signUp(username, password) {
  await prisma.user.create({
    data: {
      username: username,
      password: password,
    },
  });
}

async function uploadFile(fileName, userId, fileSize, folderId) {
  let folder = await prisma.folder.findUnique({
    where: {
      id: Number(folderId),
    },
  });
  if (folder.length < 1) {
    folder = await prisma.folder.create({
      data: {
        name: "Default",
        authorId: userId,
      },
    });
  }
  await prisma.file.create({
    data: {
      url: fileName,
      size: fileSize,
      folderId: folder.id,
    },
  });
}

async function createFolder(name, userId) {
  await prisma.folder.create({
    data: {
      name: name,
      authorId: userId,
    },
  });
  const newFolder = await prisma.folder.findMany();
  console.log(newFolder);
}

async function getAllFolders() {
  const folders = await prisma.folder.findMany();
  return folders;
}

module.exports = {
  signUp,
  uploadFile,
  createFolder,
  getAllFolders,
};
