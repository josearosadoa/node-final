const { Order, ProductsInOrder } = require("../models");



class OrderServices{
    static async getOrders(id){
        try {
            const order = await Order.findAll({
                where: {id},
                attributes: ['user_id'],
                include:{
                    model: ProductsInOrder,
                    as: 'productsInOrder',
                    attributes: ['order_id', 'product_id', 'quantity', 'price', 'status']
                }
            })
            return order;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OrderServices;