const express = require ('express');
const router = express.Router();
const citasController = require ('../controllers/citasController');


// rutas crud

router.get('/',citasController.mostrarCitas);
router.post('/',citasController.agregarCitas);
router.get('/:id',citasController.mostrarunaCita);
router.delete('/:id',citasController.eliminarCitas);
router.put('/:id',citasController.actualizarCitas);

module.exports = router;