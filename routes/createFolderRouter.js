const createFolderRouter = require("express").Router();

createFolderRouter.get("/", createFolderController.showForm);

module.exports = createFolderRouter;
