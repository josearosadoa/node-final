const {Router} = require('express');
const {getOrderByUser} = require('../controllers');


const router = Router();

/**
 * @openapi
 * /api/v1/order/{id}:
 *   get:
 *     tags: [order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: order Id
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


router.get("/order/:id", getOrderByUser);



module.exports = router;