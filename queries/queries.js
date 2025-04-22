const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//MAKE ALL SEPERATE FILES
//ADD TRY CATCH TO EVERY ASYNC FUNCTION

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

async function getAllFiles() {
  const files = await prisma.file.findMany();
  return files;
}

async function getFile(id) {
  return await prisma.file.findUnique({
    where: {
      id: id,
    },
  });
}

async function updateFolder(oldName, userId, newName) {
  return await prisma.folder.update({
    where: {
      authorId_name: {
        authorId: userId,
        name: oldName,
      },
    },
    data: {
      name: newName,
    },
  });
}

async function deleteFolder(id) {
  try {
    await prisma.file.deleteMany({
      where: {
        folderId: id,
      },
    });
    await prisma.folder.deleteMany({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  signUp,
  uploadFile,
  createFolder,
  getAllFolders,
  getAllFiles,
  getFile,
  updateFolder,
  deleteFolder,
};
