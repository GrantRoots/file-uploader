const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const db = require("../queries/queries");

function showForm(req, res) {
  res.render("uploadFile");
}

const postFile = [
  upload.single("file"),
  async (req, res) => {
    console.log(req.user);
    console.log(req.file);
    await db.uploadFile(req.file.originalname, req.user.id, req.file.size);
    res.redirect("/");
  },
];

module.exports = {
  showForm,
  postFile,
};
