const mongoose = require('mongoose');

const ClasesSchema = new mongoose.Schema
({
    titulo:
    {
        type: String,
        required: true
    },
    descripcion: 
    {
        type: String,
        required: true,
        trim: true
    },
    fecha:
    {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    cupos:{
        type: Number,
        required: true
    }
})

module.exports = Clase = mongoose.model('Clase', ClasesSchema);