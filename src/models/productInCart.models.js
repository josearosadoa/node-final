const db = require('../utils/database');
const { DataTypes} = require('sequelize');


/**
 * @openapi
 * components:
 *   schemas:
 *     productInCart:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 2
 *         cart_id:
 *           type: integer
 *           example: 4
 *         product_id:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 1
 *         price:
 *           type: decimal
 *           example: 20.00
 *         status:
 *           type: ENUM
 *           example: seleccionado

 */




const ProductsInCart = db.define('productsInCart', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },

    status: {
        type: DataTypes.ENUM("comprados", "seleccionado"),
        defaultValue: "seleccionado",
        allowNull: false,
    }

});

module.exports = ProductsInCart;