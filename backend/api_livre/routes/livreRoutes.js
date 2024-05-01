const express = require("express");
const router = express.Router();
const livreController = require("../controllers/livreController");

router.get("/:idLivre", livreController.getLivreById);
router.post("/", livreController.addLivre);
router.put("/:idLivre", livreController.updateLivre);
router.delete("/:idLivre", livreController.deleteLivre);

module.exports = router;
