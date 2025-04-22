function renderPage(req, res) {
  res.render("index", { user: req.user });
}

module.exports = {
  renderPage,
};
