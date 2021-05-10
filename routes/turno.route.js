const Turno = require('../models/turno.model');
const express = require('express');
const router = express.Router();


//Alta de turnos
router.post('/turno', function(req, res) {
    const { fecha, usuario, horario, clase} = req.body;
    if (!horario) {
        return res.status(400).json({
            ok: false,
            motivo: 'El horario es un campo obligatorio'
        });
    }

    if (!clase) {
        return res.status(400).json({
            ok: false,
            motivo: 'La clase es un campo obligatorio'
        });
    }

    let turno = new Turno({
        fecha,
        usuario,
        horario,
        clase
    });

    turno.save((err, turnoDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            turno: turnoDB
        });
    });


});

// READ (ALL)
router.get('/turnos', (req, res) => { 
    const { clase } = req.body; 

    if (clase != null) {
        Turno.find({ clase })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
    });
    } else {
    Turno.find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
    });
    }
});

// Obtine un turno
router.get('/turno/:id', function(req, res) {
    let idturno = req.params.id;
    Turno.findOne({ _id: idturno })
        .exec((err, turno) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }

         res.json({
            turno
        });

    });

});

router.put('/turno/edit/:id',function(req, res) {
      // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
      const { usuario , fecha} = req.body;
      const turnoId = req.params.id;
      
      Turno.findByIdAndUpdate(turnoId, {usuario, fecha}, {new: true}, (err, turno) => {

        if (err) {
           return res.status(400).json({err}) 
        }
        if (!turno) {
            return res.status(400).json({
                error: 'No se encontro el Turno'
            });
        }

        res.json({mensaje: 'Turno Exitoso'})
      });
});

module.exports = router;