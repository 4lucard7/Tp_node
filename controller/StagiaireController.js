const { get } = require('mongoose');
const Stagiaire = require('../model/Stagiaire');

const getAllStagiaire = async (req, res) => {
    try {
        const stagiaires = await Stagiaire.find();
        res.status(200).json(stagiaires);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getStagiaireById = async (req, res) => {
    try {
        const stagiaire = await Stagiaire.findById(req.params.id);  
        if (!stagiaire) {
            return res.status(404).json({ message: 'Stagiaire not found' });
        }
        res.status(200).json(stagiaire);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createStagiaire = async (req, res) => {
    try{
        const stagiaire = new Stagiaire({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            address: req.body.address,
            speciality: req.body.speciality,
            diplome: req.body.diplome,
            cv: req.body.cv
        });
        const newStagiaire = await stagiaire.save();
        res.status(201).json(newStagiaire);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateStagiaire = async (req, res) => {
    try {
        const stagiaire = await Stagiaire.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!stagiaire) {
            return res.status(404).json({ message: 'Stagiaire not found' });
        }
        res.status(200).json(stagiaire);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteStagiaire = async (req, res) => {
    try{
        const stagiaire = await Stagiaire.findByIdAndDelete(req.params.id);
        if (!stagiaire) {
            return res.status(404).json({ message: 'Stagiaire not found' });
        }
        res.status(200).json({ message: 'Stagiaire deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllStagiaire,
    getStagiaireById, 
    createStagiaire,
    updateStagiaire,
    deleteStagiaire
};