const express = require("express");
const router = express.Router();
const hotelController = require("../controller/HotelController");
const validate = require("../midill/validate");

router.post("/add", validate, hotelController.add);
router.get("/list", hotelController.getAll);
router.get("/getById/:id", hotelController.getById);
router.delete("/delete/:id", hotelController.deleteById);
// router.get("/getById/:id", joueurController.getById);
// router.post("/add",  joueurController.add);
// router.delete("/delete/:id", joueurController.deleteById);
// router.post("/attaque/:idVictime/:idAttaquant", joueurController.attaque);

module.exports = router;
