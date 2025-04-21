const createFolderRouter = require("express").Router();
const createFolderController = require("../controllers/createFolderController");

createFolderRouter.get("/", createFolderController.showForm);
createFolderRouter.post("/", createFolderController.postFolder);

module.exports = createFolderRouter;
