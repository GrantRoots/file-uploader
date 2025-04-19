const signUpRouter = require("express").Router();
const signUpController = require("../controllers/signUpController");

signUpRouter.get("/", signUpController.showForm);
signUpRouter.post("/", signUpController.signUpPost);

module.exports = signUpRouter;
