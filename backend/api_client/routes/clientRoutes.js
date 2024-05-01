const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

router.get("/:idClient", clientController.getClientById);
router.post("/", clientController.addClient);
router.put("/:idClient", clientController.updateClient);
router.delete("/:idClient", clientController.deleteClient);

module.exports = router;
