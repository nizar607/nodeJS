const express = require("express");
const router = express.Router();
const partieController = require("../controller/PartieController");



router.post("/add/:id1/:id2", partieController.add);
router.get("/getAll", partieController.getAll);


module.exports = router;
