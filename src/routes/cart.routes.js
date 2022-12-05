const {Router} = require('express');
const {getProductByUser} = require('../controllers');


const router = Router();


/**
 * @openapi
 * /api/v1/cart/{id}:
 *   get:
 *     tags: [cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: cart Id
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
 */

router.get("/cart/:id", getProductByUser);



module.exports = router;