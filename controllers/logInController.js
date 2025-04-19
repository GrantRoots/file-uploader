const passport = require("passport");

function showForm(req, res) {
  res.render("logIn");
}

function authenticate(req, res) {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  });
}

module.exports = {
  showForm,
  authenticate,
};
