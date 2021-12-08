const mongoose = require("mongoose");

const perfilSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    trim: true,
  },
  dni: {
    type: String,
    required: true,
    trim: true,
  },
  apy_nom: {
    type: String,
    required: true,
  },
  lugar_nacimiento: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  fecha_nacimiento: {
    type: String,
    required: true,
  },
  nacionalidad: {
    type: String,
    required: true,
  },
  estado_civil: {
    type: String,
    required: true,
  },
  cuil: {
    type: String,
    required: true,
  },
  domicilio_particular: {
    type: String,
    required: true,
  },
  domicilio_profesional: {
    type: String,
  },
  tel_fijo: {
    type: String,
  },
  tel_cel: {
    type: String,
    required: true,
  },
  institucion: {
    type: String,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  estudio_posgrado: {
    type: String,
  },
  tipo_actividad_docente: {
    type: String,
  },
  facultad: {
    type: String,
  },
  materia: {
    type: String,
  },
  imagen_actividad_docente: {
    type: String,
  },
  imagen_fotografia: {
    type: String,
  },
  imagen_dni: {
    type: String,
  },
  imagen_titulo_universitario: {
    type: String,
  },
  imagen_cv: {
    type: String,
  },
  cursos: {
    type: Array,
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

module.exports = Perfil = mongoose.model("Perfil", perfilSchema);
