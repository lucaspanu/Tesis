const Perfil = require("../models/perfil.model");
const { errorHandler } = require("../helpers/dbErrorHandling");
const express = require("express");
const router = express.Router();

//Alta
router.post("/perfil", (req, res) => {
  const {
    userId,
    dni,
    apy_nom,
    lugar_nacimiento,
    edad,
    fecha_nacimiento,
    nacionalidad,
    estado_civil,
    cuil,
    domicilio_particular,
    domicilio_profesional,
    tel_fijo,
    tel_cel,
    institucion,
    titulo,
    estudio_posgrado,
    tipo_actividad_docente,
    facultad,
    materia,
    imagen_actividad_docente,
    imagen_fotografia,
    imagen_dni,
    imagen_titulo_universitario,
    imagen_cv,
  } = req.body;

  if (
    !dni ||
    !apy_nom ||
    !lugar_nacimiento ||
    !edad ||
    !fecha_nacimiento ||
    !nacionalidad ||
    !estado_civil ||
    !cuil
  ) {
    return res.status(400).json({
      ok: false,
      motivo: "Complete los campos obligatorios",
    });
  }

  const perfil = new Perfil({
    userId,
    dni,
    apy_nom,
    lugar_nacimiento,
    edad,
    fecha_nacimiento,
    nacionalidad,
    estado_civil,
    cuil,
    domicilio_particular,
    domicilio_profesional,
    tel_fijo,
    tel_cel,
    institucion,
    titulo,
    estudio_posgrado,
    tipo_actividad_docente,
    facultad,
    materia,
    imagen_actividad_docente,
    imagen_fotografia,
    imagen_dni,
    imagen_titulo_universitario,
    imagen_cv,
  });

  perfil.save((err, perfilDB) => {
    if (err) {
      console.log("Save error", errorHandler(err));
      return res.status(401).json({
        errors: errorHandler(err),
      });
    } else {
      return res.json({
        success: true,
        message: "Perfil Creado, Ya puede inscribirse",
      });
    }
  });
});

// Obtine uno
router.get("/perfil/:id", function (req, res) {
  let _userId = req.params.id;
  Perfil.findOne({ userId: _userId }).exec((err, perfil) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        error: err,
      });
    }

    res.json({
      perfil,
    });
  });
});

//Edit
router.put("/perfil/edit/:id", function (req, res) {
  // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
  const {
    userId,
    dni,
    apy_nom,
    lugar_nacimiento,
    edad,
    fecha_nacimiento,
    nacionalidad,
    estado_civil,
    cuil,
    domicilio_particular,
    domicilio_profesional,
    tel_fijo,
    tel_cel,
    institucion,
    titulo,
    estudio_posgrado,
    tipo_actividad_docente,
    facultad,
    materia,
    imagen_actividad_docente,
    imagen_fotografia,
    imagen_dni,
    imagen_titulo_universitario,
    imagen_cv,
  } = req.body;
  const perfilId = req.params.id;

  Perfil.findByIdAndUpdate(
    perfilId,
    {
      userId,
      dni,
      apy_nom,
      lugar_nacimiento,
      edad,
      fecha_nacimiento,
      nacionalidad,
      estado_civil,
      cuil,
      domicilio_particular,
      domicilio_profesional,
      tel_fijo,
      tel_cel,
      institucion,
      titulo,
      estudio_posgrado,
      tipo_actividad_docente,
      facultad,
      materia,
      imagen_actividad_docente,
      imagen_fotografia,
      imagen_dni,
      imagen_titulo_universitario,
      imagen_cv,
    },
    { new: true },
    (err, perfil) => {
      if (err) {
        return res.status(400).json({ err });
      }
      if (!perfil) {
        return res.status(400).json({
          error: "No se encontro el Curso",
        });
      }

      res.json({ mensaje: "Perfil editado exitosamente" });
    }
  );
});

module.exports = router;
