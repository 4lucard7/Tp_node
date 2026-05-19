const moongose = require('mongoose');

const stagiaireSchema = new moongose.Schema({
    name: { type: String,
        required: true
    },
    age: { type: Number,
        required: true
    },
    email: { type: String,
        required: true
    },
    address: { type: String,
        required: true
    },
    speciality: { type: String,
        required: true
    },
    diplome: { type: String,
        required: true
    },
    cv:{type: String,
        required: true
    }
},
    {timestamps : true});

const Stagiaire = moongose.model('Stagiaire', stagiaireSchema);

module.exports = Stagiaire;