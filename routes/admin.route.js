const express = require("express");
const router = express.Router();

const { validRegister } = require("../helpers/valid");
const { adminRegisterController } = require("../controllers/admin.controller");
// const { errorHandler } = require("../helpers/dbErrorHandling");
const Usuarios = require("../models/auth.model");

//agregar un nuevo administrador
router.post("/admin/new", validRegister, adminRegisterController);

//Clases
// READ (ALL)
router.get("/admin/users", (req, res) => {
  const { perfil } = req.body;

  if (perfil != null) {
    Usuarios.find({ perfil })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, msg: `Something went wrong. ${err}` });
      });
  } else {
    Usuarios.find({})
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

// //Create
// router.post("/admin/addclase", (req, res) => {
//   const { titulo, descripcion, fecha, cupos } = req.body;
//   const errors = [];
//   if (!titulo) {
//     errors.push({ text: "Please Write a Title." });
//   }
//   if (!descripcion) {
//     errors.push({ text: "Please Write a Description" });
//   }
//   if (errors.length > 0) {
//     res.render("/admin/addclase", {
//       errors,
//       titulo,
//       descripcion,
//       fecha,
//       cupos,
//     });
//   } else {
//     const clase = new Clase({
//       titulo,
//       descripcion,
//       fecha,
//       cupos,
//     });

//     clase.save((err, clase) => {
//       if (err) {
//         console.log("Save error", errorHandler(err));
//         return res.status(401).json({
//           errors: errorHandler(err),
//         });
//       } else {
//         return res.json({
//           success: true,
//           message: "Añadido Exitosamente",
//         });
//       }
//     });
//   }
// });

// //Delete
// router.delete("/admin/clase/:id", async (req, res) => {
//   const ClaseId = req.params.id;
//   await Clase.findByIdAndDelete(ClaseId);
//   return res.json({
//     success: true,
//     message: "Eliminado Exitosamente",
//   });
// });

module.exports = router;
