const {Router} = require('express');
const {createProductInCart} = require('../controllers')

const router = Router();

/**
 * @openapi
 * /api/v1/productInCart:
 *   post:
 *     summary: Register a new product into the productCart
 *     tags: [productInCart]
 *     responses:
 *       201:
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/productInCart"
 *
 */

router.post("/productInCart", createProductInCart);


module.exports = router;