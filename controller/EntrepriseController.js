const Entreprise = require('../model/Entreprise');


const getAllEntreprise = async (req, res) => {
    try {
        const entreprises = await Entreprise.find();
        res.status(200).json(entreprises);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getEntrepriseById = async (req, res) => {
    try {
        const entreprise = await Entreprise.findById(req.params.id);
        if (!entreprise) {
            return res.status(404).json({ message: 'Entreprise not found' });
        }
        res.status(200).json(entreprise);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createEntreprise = async (req, res) => {
    try{
        const entreprise = new Entreprise({
            name: req.body.name,
            manager: req.body.manager,
            secteur: req.body.secteur,
            speciality: req.body.speciality
        });
        const newEntreprise = await entreprise.save();
        res.status(201).json(newEntreprise);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateEntreprise = async (req, res) => {
    try {
        const entreprise = await Entreprise.findByIdAndUpdate(req.params.id, req.body   , { new: true });
        if (!entreprise) {
            return res.status(404).json({ message: 'Entreprise not found' });
        }
        res.status(200).json(entreprise);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteEntreprise = async (req, res) => {
    try{
        const entreprise = await Entreprise.findByIdAndDelete(req.params.id);
        if (!entreprise) {
            return res.status(404).json({ message: 'Entreprise not found' });
        }
        res.status(200).json({ message: 'Entreprise deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllEntreprise,
    getEntrepriseById,
    createEntreprise,
    updateEntreprise,
    deleteEntreprise
}

