
const express = require("express");
const router = express.Router();
const empruntController = require("../controllers/empruntController");

router.post("/", empruntController.addEmprunt);
router.post("/return", empruntController.returnLivre);
router.get("/:idClient", empruntController.getEmpruntsByClientId);

module.exports = router;
