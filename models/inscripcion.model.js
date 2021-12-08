const mongoose = require("mongoose");

const inscripcionSchema = new mongoose.Schema({
  id_alumno: {
    type: String,
    required: true,
  },
  id_curso: {
    type: String,
    required: true,
  },
});

module.exports = Inscripcion = mongoose.model("Inscripcion", inscripcionSchema);
