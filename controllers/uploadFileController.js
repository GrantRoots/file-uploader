const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const db = require("../queries/queries");

async function showForm(req, res) {
  const folders = await db.getAllFolders();
  res.render("uploadFile", { folders: folders });
}

const postFile = [
  upload.single("file"),
  async (req, res) => {
    await db.uploadFile(
      req.file.originalname,
      req.user.id,
      req.file.size,
      req.body.folder,
      req.file.filename
    );
    res.redirect("/");
  },
];

module.exports = {
  showForm,
  postFile,
};
