const logInRouter = require("express").Router();
const logInController = require("../controllers/logInController");

logInRouter.get("/", logInController.showForm);
logInRouter.post("/", logInController.authenticate);

module.exports = logInRouter;
