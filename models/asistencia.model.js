const mongoose = require("mongoose");

const cursoSchema = new mongoose.Schema({
  id_curso: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  nro_clase: {
    type: Number,
    required: true,
  },
  alumnos: {
    type: Array,
    required: true,
  },
});

module.exports = Asistencia = mongoose.model("Asistencia", cursoSchema);
