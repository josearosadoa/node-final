const {ProductServices} = require('../services');

const getProducts = async (req, res, next) => {
    try {
        const result = await ProductServices.getAll();
        res.status(200).json(result); 
        
    } catch (error) {
        next({
            status: 400, 
            errorContent: error, 
            message: "No se pudieron obtener los productos"
        });
        
    }
}

const createProduct = async (req, res, next) => {
    try {
        const newProduct = req.body;
        const result = await ProductServices.addProduct(newProduct);
        res.json(result);
    } catch (error) {
        next({
            status: 400, 
            errorContent: error, 
            message: "No se pudieron crear los productos"
        });
    }
}

module.exports = {
    getProducts,
    createProduct,
}