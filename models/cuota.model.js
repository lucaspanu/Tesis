const mongoose = require("mongoose");

const cursoSchema = new mongoose.Schema({
  id_curso: {
    type: String,
    required: true,
  },
  id_alumno: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
  nro_transaccion: {
    type: Number,
    required: true,
  },
  nro_cuota: {
    type: Number,
    required: true,
  },
  intereses: {
    type: Number,
  },
});

module.exports = Cuota = mongoose.model("Cuota", cursoSchema);
