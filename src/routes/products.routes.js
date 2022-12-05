const {Router} = require('express');
const { getProducts, createProduct } = require('../controllers');

const router = Router();

/**
 * @openapi
 * /api/v1/products:
 *   post:
 *     summary:  add new product into the cart
 *     tags: [products]
 *     requestBody:
 *       description: To create a new product, you need a name, price, availableQty  and status.
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
 *                     $ref: "#/components/schemas/products"
 *
 */

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     tags: [products]
 *     parameters:
 *         schema:
 *     responses:
 *       200:
 *         description: OK
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
 *                   items: {}
 *                     $ref: "#/components/schemas/products" 
 */



router.get('/products', getProducts);
router.post('/products', createProduct);


module.exports = router; 