const express = require ('express');
const router = express.Router();
const clientesController = require ('../controllers/clientesController');


// rutas crud

router.get('/',clientesController.mostrarClientes);
router.post('/',clientesController.agregarClientes);
router.get('/:id',clientesController.mostrarunCliente);
router.delete('/:id',clientesController.eliminarClientes);
router.put('/:id',clientesController.actualizarClientes);

module.exports = router;