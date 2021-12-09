import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router();

//crear rutas
router.route('/').delete(productoCtrl.borrarProducto);

export default router;