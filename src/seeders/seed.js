const db = require('../utils/database');
const {Cart, Order, Products, Users, ProductsInCart, ProductsInOrder} = require('../models');
const initModels = require('../models/initModels');

initModels();

const users = [
    {
        username: 'Juan',
        email:'jgonzalez@gmail.com',
        password: '1234'
    },

    {
        username: 'Evelyn',
        email:'erodriguez@gmail.com',
        password: '1234'
    },

    {
        username: 'Paul',
        email:'plopez@gmail.com',
        password: '1234'
    }


];

const order = [
    {
        totalPrice: 100.00,
        user_id: 1,
        status: "completed"
    },

    {
        totalPrice: 50.00,
        user_id: 2,
        status: "completed"
    },

    {
        totalPrice: 20.00,
        user_id: 3,
        status: "completed"
    }
];

const products = [
    {
        name: 'IPHONE',
        price: 95.00,
        availableQty: 1,
        status: "agregado",
        userd_id: 1
    },

    {
        name: 'Cover',
        price: 20.00,
        availableQty: 1,
        status: "agregado",
        userd_id: 3
    },

    {
        name: 'heardphones',
        price: 50.00,
        availableQty: 1,
        status: "agregado",
        userd_id: 2
    },
];

const cart = [
    {
        userd_id: 1,
        totalPrice: 100.00
    },

    {
        userd_id: 2,
        totalPrice: 50.00
    },

    {
        userd_id: 3,
        totalPrice: 20.00
    }

];
const productsInOrder = [
    {
        order_id: 1,
        product_id: 1,
        quantity: 1,
        price: 95.00,
        status: true
    },

    {
        order_id: 2,
        product_id: 2,
        quantity: 1,
        price: 20.00,
        status: true
    },

    {
        order_id: 3,
        product_id: 3,
        quantity: 1,
        price: 50.00,
        status: true
    },
];


const productsInCart = [
    {
        cart_id: 1,
        product_id: 2,
        quantity: 1,
        price: 20.00,
        status: "seleccionado"
    },

    {
        cart_id: 1,
        product_id: 1,
        quantity: 1,
        price: 95.00,
        status: "seleccionado"
    },

    {
        cart_id: 2,
        product_id: 3,
        quantity: 1,
        price: 50.00,
        status: "seleccionado"
    }
];


db.sync({ force: true})
.then(() => {
    console.log('Sicronizada');
    users.forEach(async(user) => await Users.create(user));
    setTimeout(() => {
        order.forEach(async(orde) => await Order.create(orde));
    
    },100);

    setTimeout(() => {
        products.forEach(async(product) => await Products.create(product));

    },200);

    setTimeout(() => {
        cart.forEach(async(carrito) => await Cart.create(carrito));

    }, 300);
    setTimeout(() => {
        productsInOrder.forEach(async(proInOr) => await ProductsInOrder.create(proInOr));

    }, 400);


    setTimeout(() => {
        productsInCart.forEach(async(proInCart) => ProductsInCart.create(proInCart));

    }, 500);
});



