const detailsRouter = require("express").Router();
const detailsController = require("../controllers/detailsController");

detailsRouter.get("/:fileId", detailsController.showDetails);

module.exports = detailsRouter;
