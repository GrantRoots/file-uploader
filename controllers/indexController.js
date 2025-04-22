const db = require("../queries/queries");

async function renderPage(req, res) {
  const folders = await db.getAllFolders();
  const files = await db.getAllFiles();
  res.render("index", { user: req.user, folders: folders, files: files });
}

module.exports = {
  renderPage,
};
