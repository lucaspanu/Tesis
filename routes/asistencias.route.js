const Asistencia = require("../models/asistencia.model");
const { errorHandler } = require("../helpers/dbErrorHandling");
const express = require("express");
const router = express.Router();

//Alta
router.post("/asistencias", (req, res) => {
  const { id_curso, fecha, nro_clase, alumnos } = req.body;

  if (!id_curso || !fecha || !nro_clase || !alumnos) {
    return res.status(400).json({
      ok: false,
      motivo: "Complete con los datos correspondientes",
    });
  }

  const asistencias = new Asistencia({
    id_curso,
    fecha,
    nro_clase,
    alumnos,
  });

  asistencias.save((err, asistenciaDB) => {
    if (err) {
      console.log("Save error", errorHandler(err));
      return res.status(401).json({
        errors: errorHandler(err),
      });
    } else {
      return res.json({
        success: true,
        message: "Asistencias añadidas Exitosamente",
      });
    }
  });
});

// READ (ALL)
router.get("/asistencias", (req, res) => {
  const { estado } = req.body;

  if (estado != null) {
    Asistencia.find({ estado })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, msg: `Something went wrong. ${err}` });
      });
  } else {
    Asistencia.find({})
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
router.get("/asistencias/:id", function (req, res) {
  let idAsistencias = req.params.id;
  Asistencia.findOne({ _id: idAsistencias }).exec((err, asistencias) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        error: err,
      });
    }

    res.json({
      asistencias,
    });
  });
});

//Edit
router.put("/asistencias/edit/:id", function (req, res) {
  // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
  const { id_curso, fecha, nro_clase, alumnos } = req.body;
  const asistenciasId = req.params.id;

  Asistencia.findByIdAndUpdate(
    asistenciasId,
    {
      id_curso,
      fecha,
      nro_clase,
      alumnos,
    },
    { new: true },
    (err, asistencias) => {
      if (err) {
        return res.status(400).json({ err });
      }
      if (!asistencias) {
        return res.status(400).json({
          error: "No se encontrarons las asistencias",
        });
      }

      res.json({ mensaje: "Asistencias editadas exitosamente" });
    }
  );
});

//Delete
router.delete("/asistencias/:id", async (req, res) => {
  const asistenciasId = req.params.id;
  await Asistencia.findByIdAndDelete(asistenciasId);
  return res.json({
    success: true,
    message: "Eliminado Exitosamente",
  });
});

module.exports = router;
