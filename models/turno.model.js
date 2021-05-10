const mongoose = require('mongoose');

let turnoSchema = new mongoose.Schema({
    fecha: {
        type: String,
        default: ''
    },
    usuario: {
        type: String,
        default: ''
    },
    horario: {
        type: String,
        require: true
    },
    clase: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Turno', turnoSchema);