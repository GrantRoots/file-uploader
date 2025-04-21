const passport = require("passport");

function showForm(req, res) {
  res.render("logIn");
}

function authenticate(req, res, next) {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })(req, res, next);
}

module.exports = {
  showForm,
  authenticate,
};
