function renderPage(req, res) {
  console.log(req.user, "req user indexRouter");
  res.render("index", { user: req.user });
}

module.exports = {
  renderPage,
};
