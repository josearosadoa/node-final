const db = require('../utils/database');
const { DataTypes} = require('sequelize');


const Cart = db.define('cart', {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    userd_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
});

module.exports = Cart;