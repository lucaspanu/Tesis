const Cuota = require("../models/cuota.model");
const { errorHandler } = require("../helpers/dbErrorHandling");
const express = require("express");
const router = express.Router();

//Alta
router.post("/cuotas", (req, res) => {
  const {
    id_curso,
    id_alumno,
    fecha,
    monto,
    nro_transaccion,
    nro_cuota,
    intereses,
  } = req.body;

  if (
    !id_curso ||
    !fecha ||
    !id_alumno ||
    !monto ||
    !nro_transaccion ||
    !nro_cuota
  ) {
    return res.status(400).json({
      ok: false,
      motivo: "Complete con los datos correspondientes",
    });
  }

  const cuota = new Cuota({
    id_curso,
    id_alumno,
    fecha,
    monto,
    nro_transaccion,
    nro_cuota,
    intereses,
  });

  cuota.save((err, cuotasDB) => {
    if (err) {
      console.log("Save error", errorHandler(err));
      return res.status(401).json({
        errors: errorHandler(err),
      });
    } else {
      return res.json({
        success: true,
        message: "Cuota añadida Exitosamente",
      });
    }
  });
});

// READ (ALL)
router.get("/cuotas", (req, res) => {
  const { estado } = req.body;

  if (estado != null) {
    Cuota.find({ estado })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, msg: `Something went wrong. ${err}` });
      });
  } else {
    Cuota.find({})
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
router.get("/cuotas/:id", function (req, res) {
  let idCuotas = req.params.id;
  Cuota.findOne({ _id: idCuotas }).exec((err, cuotas) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        error: err,
      });
    }

    res.json({
      cuotas,
    });
  });
});

//Edit
router.put("/cuotas/edit/:id", function (req, res) {
  const {
    id_curso,
    id_alumno,
    fecha,
    monto,
    nro_transaccion,
    nro_cuota,
    intereses,
  } = req.body;
  const cuotasId = req.params.id;

  Cuota.findByIdAndUpdate(
    cuotasId,
    {
      id_curso,
      id_alumno,
      fecha,
      monto,
      nro_transaccion,
      nro_cuota,
      intereses,
    },
    { new: true },
    (err, cuotas) => {
      if (err) {
        return res.status(400).json({ err });
      }
      if (!cuotas) {
        return res.status(400).json({
          error: "No se encontrarons cuotas",
        });
      }

      res.json({ mensaje: "Cuota editada exitosamente" });
    }
  );
});

//Delete
router.delete("/cuotas/:id", async (req, res) => {
  const cuotasId = req.params.id;
  await Cuota.findByIdAndDelete(cuotasId);
  return res.json({
    success: true,
    message: "Eliminado Exitosamente",
  });
});

module.exports = router;
