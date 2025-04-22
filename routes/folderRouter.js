const folderRouter = require("express").Router();
const folderController = require("../controllers/folderController");

folderRouter.get("/create", folderController.showCreateForm);
folderRouter.post("/create", folderController.postFolder);
folderRouter.get("/update", folderController.showUpdateForm);
folderRouter.post("/update", folderController.updateName);
folderRouter.post("/delete", folderController.deleteFolder);

module.exports = folderRouter;
