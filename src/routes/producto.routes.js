import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router();

//crear rutas
router
  .route("/")
  .post(productoCtrl.crearProducto)
  .get(productoCtrl.listarProductos);

router.route('/:id').get(productoCtrl.obtenerProducto).delete(productoCtrl.borrarProducto)


export default router;
