const Curso = require("../models/curso.model");
const { errorHandler } = require("../helpers/dbErrorHandling");
const express = require("express");
const router = express.Router();

//Alta
router.post("/cursos", (req, res) => {
  const {
    titulo,
    descripcion,
    fecha,
    costo,
    carga_horaria,
    profesor,
    cupos,
    imagen,
    estado,
  } = req.body;

  if (!titulo) {
    return res.status(400).json({
      ok: false,
      motivo: "El horario es un campo obligatorio",
    });
  }

  const curso = new Curso({
    titulo,
    descripcion,
    fecha,
    costo,
    carga_horaria,
    profesor,
    cupos,
    imagen,
    estado,
  });

  curso.save((err, cursoDB) => {
    if (err) {
      console.log("Save error", errorHandler(err));
      return res.status(401).json({
        errors: errorHandler(err),
      });
    } else {
      return res.json({
        success: true,
        message: "Añadido Exitosamente",
      });
    }
  });
});

// READ (ALL)
router.get("/cursos", (req, res) => {
  const { estado } = req.body;

  if (estado != null) {
    Curso.find({ estado })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, msg: `Something went wrong. ${err}` });
      });
  } else {
    Curso.find({})
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
router.get("/cursos/:id", function (req, res) {
  let idcursos = req.params.id;
  Curso.findOne({ _id: idcursos }).exec((err, curso) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        error: err,
      });
    }

    res.json({
      curso,
    });
  });
});

//Edit
router.put("/curso/edit/:id", function (req, res) {
  // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
  const {
    titulo,
    descripcion,
    fecha,
    costo,
    carga_horaria,
    profesor,
    cupos,
    imagen,
    estado,
  } = req.body;
  const cursoId = req.params.id;

  Curso.findByIdAndUpdate(
    cursoId,
    {
      titulo,
      descripcion,
      fecha,
      costo,
      carga_horaria,
      profesor,
      cupos,
      imagen,
      estado,
    },
    { new: true },
    (err, turno) => {
      if (err) {
        return res.status(400).json({ err });
      }
      if (!turno) {
        return res.status(400).json({
          error: "No se encontro el Curso",
        });
      }

      res.json({ mensaje: "Curso editado exitosamente" });
    }
  );
});

//Delete
router.delete("/cursos/:id", async (req, res) => {
  const CursoId = req.params.id;
  await Curso.findByIdAndDelete(CursoId);
  return res.json({
    success: true,
    message: "Eliminado Exitosamente",
  });
});

module.exports = router;
