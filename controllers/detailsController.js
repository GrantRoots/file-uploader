const db = require("../queries/queries");
const path = require("path");

async function showDetails(req, res) {
  const file = await db.getFile(Number(req.params.fileId));
  res.render("details", { file: file });
}

async function downloadFile(req, res) {
  const file = await db.getFile(Number(req.params.fileId));
  const filePath = path.join("uploads", file.filename);
  res.download(filePath, file.url);
}

module.exports = {
  showDetails,
  downloadFile,
};
