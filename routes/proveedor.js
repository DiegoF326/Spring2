const express = require ('express');
const router = express.Router();
const proveedoresController = require ('../controllers/proveedoresController');


// rutas crud

router.get('/',proveedoresController.mostrarProveedores);
router.post('/',proveedoresController.agregarProveedores);
router.get('/:id',proveedoresController.mostrarunProveedor);
router.delete('/:id',proveedoresController.eliminarProveedores);
router.put('/:id',proveedoresController.actualizarProveedores);

module.exports = router;