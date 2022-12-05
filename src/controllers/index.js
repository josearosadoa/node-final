const {userRegister} = require('./users.controllers');
const { userLogin} = require('./auth.controllers');
const {getProducts, createProduct} = require('./product.controllers')
const {createProductInCart} = require('./productInCart.controllers');
const {getProductByUser} = require('./cart.controllers');
const {getOrderByUser} = require('./order.controllers');

module.exports = {
    userRegister,
    userLogin,
    getProducts,
    createProduct,
    createProductInCart,
    getProductByUser,
    getOrderByUser,
};