const { Cart, ProductsInCart } = require("../models");


class CartServices {
    static async getProducts(id){
        try {
            const cart = await Cart.findAll({
                where: {id},
                attributes: ['userd_id'],
                include: {
                    model: ProductsInCart,
                    as: 'productsInCart',
                    attributes: ['cart_id', 'product_id', 'quantity', 'price', 'status']
    
                },
            });
            return cart;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = CartServices;