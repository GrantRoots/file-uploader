const db = require("../queries/queries");
const { body, validationResult } = require("express-validator");

function showCreateForm(req, res) {
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

function showUpdateForm(req, res) {
  res.render("updateFolder", { query: req.query.name });
}

const updateName = [
  validateFolder,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.error(errors);
        return res.status(400).render("signUp", {
          errors: errors.array(),
        });
      }
      const oldName = req.body.oldName;
      const newName = req.body.folder;
      await db.updateFolder(oldName, req.user.id, newName);
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  },
];

async function deleteFolder(req, res, next) {
  try {
    await db.deleteFolder(Number(req.body.folderId));
    res.redirect("/");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  showCreateForm,
  postFolder,
  showUpdateForm,
  updateName,
  deleteFolder,
};
