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

module.exports = {
  signUp,
};
