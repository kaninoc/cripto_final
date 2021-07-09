import { Router } from "express";
import * as products from "../controllers/products.controller"

const router = Router();

router.post('/',products.createProduct)
router.get('/',products.getProduct)
router.get('/:productId',products.getProductbyId)
router.put('/:productId',products.updateProductbyId)
router.delete('/:productId',products.deleteProductbyId)

export default router;

