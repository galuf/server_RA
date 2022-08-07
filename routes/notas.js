const { Router } = require("express");
const { postNotas, getNotas } = require("../controllers/notas");
const router = Router();

router.get("/", getNotas);
router.post("/create", postNotas);
module.exports = router;
