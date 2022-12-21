const express = require ('express');
const router = express.Router();
const pedidoController = require ('../controllers/pedidoController');


// rutas crud

router.get('/',pedidoController.mostrarPedidos);
router.post('/',pedidoController.agregarPedidos);
router.get('/:id',pedidoController.mostrarunPedido);
router.delete('/:id',pedidoController.eliminarPedidos);
router.put('/:id',pedidoController.actualizarPedidos);

module.exports = router;