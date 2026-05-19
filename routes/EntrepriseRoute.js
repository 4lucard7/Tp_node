const { getAllEntreprise, getEntrepriseById, createEntreprise, updateEntreprise, deleteEntreprise } = require('../controller/EntrepriseController');
const router = require('express').Router();

router.get('/entreprises', getAllEntreprise);
router.get('/entreprises/:id', getEntrepriseById);
router.post('/entreprises', createEntreprise);
router.put('/entreprises/:id', updateEntreprise);
router.delete('/entreprises/:id', deleteEntreprise);

module.exports = router;
