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

async function uploadFile(fileName, userId, fileSize) {
  //could use default folder or create one if none exist
  //get folder id
  let folder = await prisma.folder.findMany({
    where: {
      authorId: userId,
    },
  });
  console.log(folder, "folder queries");
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
      folderId: folder[0].id || folder.id,
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

module.exports = {
  signUp,
  uploadFile,
  createFolder,
};
