const db = require("../queries/queries");
const { body, validationResult } = require("express-validator");

function showForm(req, res) {
  res.render("createFolder");
}

//could allow numbers
const validateFolder = [body("folder").trim().notEmpty().isAlpha()];
const postFolder = [
  validateFolder,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error(errors);
      return res.status(400).render("signUp", {
        errors: errors.array(),
      });
    }
    await db.createFolder(req.body.folder, req.user.id);
    res.redirect("/");
  },
];

module.exports = {
  showForm,
  postFolder,
};
