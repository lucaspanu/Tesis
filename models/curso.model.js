const mongoose = require("mongoose");

const cursoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    trim: true,
  },
  fecha: {
    type: String,
  },
  costo: {
    type: Number,
  },
  carga_horaria: {
    type: String,
  },
  tipo_curso: {
    type: String,
  },
  profesores: {
    type: Array,
  },
  alumnos: {
    type: Array,
  },
  nro_cuotas: {
    type: Number,
  },
  imagen: {
    type: String,
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

module.exports = Curso = mongoose.model("Curso", cursoSchema);
