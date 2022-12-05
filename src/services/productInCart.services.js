const { ProductsInCart } = require("../models");


class ProductInCartServices {
    static async addProductInCart(data){
        try {
            const result = await ProductsInCart.create(data)
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductInCartServices;