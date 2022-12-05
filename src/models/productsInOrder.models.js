const db = require('../utils/database');
const { DataTypes} = require('sequelize');


const ProductsInOrder = db.define('productsInOrder', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
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
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    }

});

module.exports = ProductsInOrder;