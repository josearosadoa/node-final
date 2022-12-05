const db = require('../utils/database');
const { DataTypes} = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Iphone
 *         price:
 *           type: decimal
 *           example: 300.00
 *         availableQty:
 *           type: integer
 *           example: 5
 *         status:
 *           type: ENUM
 *           example: agregado

 */



const Products= db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    
    availableQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    status: {
        type: DataTypes.ENUM("agregado", "sin agregar"),
        defaultValue: "sin agregar" ,
        allowNull: false,
    },

    userd_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});


module.exports = Products;