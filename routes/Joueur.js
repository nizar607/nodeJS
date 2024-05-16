const express = require("express");
const router = express.Router();
const joueurController = require("../controller/JoueurController");
// const validate = require("../midill/validate");

// router.post("/add", validate, joueurController.add);
router.get("/getAll", joueurController.getAll);
router.get("/getById/:id", joueurController.getById);
router.post("/add",  joueurController.add);
router.delete("/delete/:id", joueurController.deleteById);
router.post("/attaque/:idVictime/:idAttaquant", joueurController.attaque);

module.exports = router;
