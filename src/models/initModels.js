const {
    Cart,
    Order,
    Products,
    Users,
    ProductsInCart,
    ProductsInOrder,
} = require("./index");



const initModels = () => {

    Products.belongsTo(Users, {as:'user', foreignKey: 'user_id'});
    Users.hasMany(Products, {as:'products', foreignKey: 'user_id'});

    Users.hasOne(Cart, {as: 'cart', foreignKey:'user_id'});
    Cart.belongsTo(Users, {as: 'owner', foreignKey: 'user_id'});

    Order.belongsTo(Users, {as: 'creater', foreignKey: 'user_id'});
    Users.hasMany(Order, {as:'orders', foreignKey: 'user_id'});

    ProductsInCart.belongsTo(Cart, {as: "products", foreignKey: 'cart_id'});
    Cart.hasMany(ProductsInCart, {as: 'productsInCart', foreignKey: 'cart_id'});

    Products.belongsTo(ProductsInCart, {as: 'articule', foreignKey: 'product_id'});
    ProductsInCart.hasOne(Products, {as: 'item', foreignKey:'product_id'})

    ProductsInOrder.belongsTo(Order, {as: 'items', foreignKey: 'order_id'});
    Order.hasMany(ProductsInOrder, {as: 'productsInOrder', foreignKey: 'order_id'});

    Products.belongsTo(ProductsInOrder, {as: 'items', foreignKey: 'product_id'});
    ProductsInOrder.hasOne(Products, {as: 'products', foreignKey:'product_id'})


}

module.exports = initModels;