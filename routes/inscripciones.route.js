const Inscripcion = require("../models/inscripcion.model");
const { errorHandler } = require("../helpers/dbErrorHandling");
const express = require("express");
const router = express.Router();

// Alta
router.post("/inscripcion", (req, res) => {
  const { id_alumno, id_curso } = req.body;

  if (!id_alumno || !id_curso) {
    return res.status(400).json({
      ok: false,
      motivo: "Error al crear una inscripcion",
    });
  }

  const inscripcion = new Inscripcion({
    id_alumno,
    id_curso,
  });

  inscripcion.save((err) => {
    if (err) {
      console.log("Save error", errorHandler(err));
      return res.status(401).json({
        errors: errorHandler(err),
      });
    } else {
      return res.json({
        success: true,
        message: "Inscripcion realizada Exitosamente",
      });
    }
  });
});

// READ (ALL)
router.get("/inscripciones", (req, res) => {
  const { estado } = req.body;

  if (estado != null) {
    Inscripcion.find({ estado })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, msg: `Something went wrong. ${err}` });
      });
  } else {
    Inscripcion.find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, msg: `Something went wrong. ${err}` });
      });
  }
});

// Obtine uno
router.get("/inscripcion/:id", function (req, res) {
  let idInscripcion = req.params.id;
  Inscripcion.findOne({ _id: idInscripcion }).exec((err, inscripcion) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        error: err,
      });
    }

    res.json({
      inscripcion,
    });
  });
});

// Delete
router.delete("/inscripcion/:id", async (req, res) => {
  const InscripcionId = req.params.id;
  await Inscripcion.findByIdAndDelete(InscripcionId);
  return res.json({
    success: true,
    message: "Eliminado Exitosamente",
  });
});

module.exports = router;
