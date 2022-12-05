const { Products } = require("../models");
const {Op} = require("sequelize");

class ProductServices {
    static async getAll(){
        try {
            const result = await Products.findAll({
                where: {
                   availableQty: {
                    [Op.gt]: 0,
                   }    
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async addProduct(newProduct){
        try {
            const result = await Products.create(newProduct);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductServices;