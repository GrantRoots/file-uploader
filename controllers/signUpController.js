const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../queries/queries");

function showForm(req, res) {
  res.render("signUp");
}

const validateUser = [
  body("username").trim().notEmpty().escape(),
  body("password").trim().notEmpty(),
  body("confirmPassword")
    .trim()
    .notEmpty()
    .custom((value, { req }) => {
      if (value === req.body.password) {
        return true;
      }
      throw new Error("Passwords do not match");
    }),
  ,
];

const signUpPost = [
  validateUser,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error(errors);
      return res.status(400).render("signUp", {
        errors: errors.array(),
      });
    }
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      await db.signUp(req.body.username, hashedPassword);
      res.redirect("/");
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
];

module.exports = {
  showForm,
  signUpPost,
};
