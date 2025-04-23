const detailsRouter = require("express").Router();
const detailsController = require("../controllers/detailsController");

detailsRouter.get("/:fileId", detailsController.showDetails);
detailsRouter.get("/:fileId/download", detailsController.downloadFile);

module.exports = detailsRouter;
