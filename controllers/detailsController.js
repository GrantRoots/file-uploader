const db = require("../queries/queries");

async function showDetails(req, res) {
  console.log(req.params.fileId);
  const file = await db.getFile(Number(req.params.fileId));
  res.render("details", { file: file });
}

module.exports = {
  showDetails,
};
