const {getAllStagiaire,getStagiaireById, createStagiaire,updateStagiaire,deleteStagiaire} = require('../controller/StagiaireController');
const router = require('express').Router();

router.get("/stagiaires", getAllStagiaire);
router.get("/stagiaires/:id", getStagiaireById);
router.post("/stagiaires", createStagiaire);
router.put("/stagiaires/:id", updateStagiaire);
router.delete("/stagiaires/:id", deleteStagiaire);

module.exports = router;