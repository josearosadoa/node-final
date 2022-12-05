const db = require('../utils/database');
const {DataTypes} = require('sequelize');



const Order = db.define('order', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    
    totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,

    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    status: {
        type: DataTypes.ENUM("completed", "pending"),
        defaultValue: "pending",
        allowNull: false,
    },
});

module.exports = Order;
