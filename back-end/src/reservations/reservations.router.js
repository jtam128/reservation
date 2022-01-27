const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./reservations.controller");
/**
 * Defines the router for reservation resources.
 * @type {Router}
 */
router
  .route("/")
  .post(controller.create)
  .get(controller.list)
  .all(methodNotAllowed);


module.exports = router;
