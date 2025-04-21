const uploadFileRouter = require("express").Router();
const uploadFileController = require("../controllers/uploadFileController");

uploadFileRouter.get("/", uploadFileController.showForm);
uploadFileRouter.post("/", uploadFileController.postFile);

module.exports = uploadFileRouter;
