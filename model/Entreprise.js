const mongoose = require('mongoose');

const entrepriseSchema = new mongoose.Schema({
    name: { type: String,
        required: true
    },
    manager: { type: String,
        required: true
    },
    secteur: { type: String,
        required: true
    },
    speciality: { type: String,
        required: true
    }
}, {
    timestamps: true
});

const Entreprise = mongoose.model('Entreprise', entrepriseSchema);

module.exports = Entreprise;