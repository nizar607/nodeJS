const express = require("express");
const router = express.Router();
const chambreController = require("../controller/ChambreController");
// const validate = require("../midill/validate");

router.post("/add/:id", chambreController.add);
router.get("/list", chambreController.getAll);
router.put("/reserve/:id/:nom", chambreController.reserve);


module.exports = router;
